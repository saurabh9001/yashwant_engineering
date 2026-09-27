// Build Yashwant-Engineering-Catalog.docx from catalog-sample.md — see info.md for how to run it.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, BorderStyle, VerticalAlign, ExternalHyperlink,
  Footer, PageNumber, TabStopType, HeadingLevel, TableLayoutType,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'Yashwant-Engineering-Catalog.docx');
const TMP = path.join(__dirname, '.build');
fs.mkdirSync(TMP, { recursive: true });

const NAVY = '0F2F5C', ORANGE = 'E8621A', INK = '16202E', MUTED = '5A6778', LINE = 'DDE4EC';
const SECTION_COLORS = ['1765C1'];
const PAGE_W = 11906, MARGIN = 680, CONTENT_W = PAGE_W - 2 * MARGIN; // A4, DXA

// ---------- parse markdown ----------
const md = fs.readFileSync(path.join(ROOT, 'catalog-sample.md'), 'utf8');
const strip = t => t.replace(/\*\*?|\\/g, '').trim();
const header = md.split('</div>')[0];
const taglines = [...header.matchAll(/^\*\*([^*\[]+)\*\*$/gm)].map(m => m[1].trim());

const sections = [];
const secRe = /^## (\d+)\. (.+?)\n([\s\S]*?)(?=^## |\n---|$(?![\s\S]))/gm;
for (const m of md.matchAll(secRe)) {
  const [, num, title, body] = m;
  const [en, mr] = title.split(' — ');
  const products = [];
  for (const row of body.matchAll(/^\| \*\*(\d{3})\*\* \|(.+)$/gm)) {
    const cells = row[2].replace(/\|\s*$/, '').split(' | ').map(c => c.trim());
    const names = cells[0].split('<br>').map(strip);
    const photos = [...cells[1].matchAll(/src="([^"]+)"/g)].map(x => x[1]);
    const specs = cells[2].split('<br>').map(l => {
      const i = l.indexOf(':-');
      return i < 0 ? null : [strip(l.slice(0, i)), strip(l.slice(i + 2))];
    }).filter(Boolean);
    products.push({ code: row[1], names, photos, specs });
  }
  sections.push({ num, en: en.trim(), mr: (mr || '').trim(), products });
}
const lastDiv = md.lastIndexOf('<div align="center">');
const footerLines = md.slice(lastDiv).split('</div>')[0].split('\n').slice(1)
  .filter(l => l.trim()).map(l => strip(l.replace(/&nbsp;/g, ' ')));

// ---------- images: original full-size photos, whole picture fitted in its box ----------
const tg = (dir, n) => `img/${dir}/photo_63122484911907${n}_y.jpg`;
const ORIGINALS = {
  '101': ['img/photos/IMG_0177', 'img/photos/IMG_0180', 'img/photos/IMG_0181'],
  '102': ['img/photos/IMG_8456', 'img/photos/IMG_8460', 'img/photos/IMG_8464'],
  '103': [tg('1pt', '17657'), tg('1pt', '17655'), tg('1pt', '17656')],
  '104': [tg('3tt', '17678'), 'img/photos/IMG_9142', 'img/photos/IMG_9144'],
  '201': ['img/photos/IMG_9852', 'img/photos/IMG_9848', 'img/photos/IMG_9850'],
  '202': ['img/photos/IMG_8991', 'img/photos/IMG_8988', 'img/photos/IMG_8990'],
  '203': [tg('8vg', '17726'), tg('8vg', '17725')],
  '204': ['img/big dakala gada/IMG_5996', 'img/big dakala gada/IMG_5995', 'img/big dakala gada/IMG_5994'],
  '301': [tg('5k5p', '17701'), tg('5k5p', '17703'), tg('5k5p', '17704')],
  '401': ['img/photos/IMG_9352', 'img/photos/IMG_9354', 'img/photos/IMG_9355'],
  '402': ['img/photos/IMG_7947', 'img/photos/IMG_7945', 'img/photos/IMG_7948'],
  '501': ['img/photos/anothwer/IMG_9348', 'img/photos/anothwer/IMG_9341', 'img/photos/anothwer/IMG_9345'],
};
// 'img/photos/IMG_0177' -> the actual file, whatever its extension (.HEIC / .heic / .jpg)
function resolve(rel) {
  const full = path.join(ROOT, rel);
  if (fs.existsSync(full)) return full;
  const dir = path.dirname(full), base = path.basename(full);
  const hit = fs.readdirSync(dir).find(f => f.replace(/\.[^.]+$/, '') === base);
  if (!hit) throw new Error('photo not found: ' + rel);
  return path.join(dir, hit);
}
// pixels per point: main photos 8x, small photos 6x, so they stay sharp when zooming the PDF
const UPRIGHT = path.join(__dirname, 'upright');
if (!fs.existsSync(UPRIGHT)) execFileSync('swiftc', ['-O', path.join(__dirname, 'upright.swift'), '-o', UPRIGHT]);
function fit(rel, boxW, boxH, name, SCALE = 8) {
  const out = path.join(TMP, name);
  const upright = path.join(TMP, 'upright-' + name);
  execFileSync(UPRIGHT, [resolve(rel), upright]);
  const dims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', upright]).toString();
  const W = +dims.match(/pixelWidth: (\d+)/)[1], H = +dims.match(/pixelHeight: (\d+)/)[1];
  const k = Math.min(boxW / W, boxH / H);
  const w = Math.round(W * k), h = Math.round(H * k);
  const pw = Math.min(W, w * SCALE), ph = Math.min(H, h * SCALE);
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '92',
    '--resampleHeightWidth', String(ph), String(pw), upright, '--out', out]);
  fs.unlinkSync(upright);
  return { data: fs.readFileSync(out), w, h };
}
const img = f => new ImageRun({ type: 'jpg', data: f.data, transformation: { width: f.w, height: f.h } });

// ---------- helpers ----------
const FONT = { ascii: 'Calibri', hAnsi: 'Calibri', cs: 'Nirmala UI' };
const run = (text, o = {}) => new TextRun({
  text, font: FONT, color: o.color || INK, size: o.size || 20,
  bold: !!o.bold, boldComplexScript: !!o.bold, sizeComplexScript: o.size || 20,
  italics: !!o.italics,
});
const link = (text, url, o = {}) => new ExternalHyperlink({
  link: url,
  children: [new TextRun({ text, font: FONT, color: o.color || 'FFFFFF', size: o.size || 19,
    sizeComplexScript: o.size || 19, bold: true, boldComplexScript: true, underline: {} })],
});
const noBorders = { top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' } };
const fill = color => ({ fill: color, type: ShadingType.CLEAR, color: 'auto' });
const cellMargins = (t, r, b, l) => ({ top: t, right: r, bottom: b, left: l });

// One-cell table used for coloured bars (renders the same everywhere).
function bar(color, children, margins = cellMargins(90, 160, 90, 160), extraBorders = {}) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [CONTENT_W], layout: TableLayoutType.FIXED,
    borders: { ...noBorders, insideHorizontal: noBorders.top, insideVertical: noBorders.top },
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA }, shading: fill(color), margins,
      borders: { ...noBorders, ...extraBorders }, children,
    })] })],
  });
}

// ---------- header banner ----------
// Only the logo and a big name sit in the navy banner, so the top of page 1
// stays crisp in WhatsApp / email previews. Everything else goes in the panel below.
const logo = fit('img/logo/logo.jpg', 150, 118, 'logo.jpg', 10);
const LOGO_W = 2500;
const masthead = new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [LOGO_W, CONTENT_W - LOGO_W], layout: TableLayoutType.FIXED,
  borders: { ...noBorders, insideHorizontal: noBorders.top, insideVertical: noBorders.top },
  rows: [new TableRow({ children: [
    new TableCell({
      width: { size: LOGO_W, type: WidthType.DXA }, shading: fill(NAVY), verticalAlign: VerticalAlign.CENTER,
      margins: cellMargins(260, 60, 260, 200), borders: noBorders,
      children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [img(logo)] })],
    }),
    new TableCell({
      width: { size: CONTENT_W - LOGO_W, type: WidthType.DXA }, shading: fill(NAVY), verticalAlign: VerticalAlign.CENTER,
      margins: cellMargins(200, 200, 200, 160), borders: noBorders,
      children: [
        new Paragraph({ children: [run('यशवंत इंजिनिअरिंग', { color: 'FFFFFF', size: 84, bold: true })] }),
        new Paragraph({ spacing: { before: 40 }, children: [run('YASHWANT ENGINEERING', { color: 'FFB27D', size: 52, bold: true })] }),
      ],
    }),
  ] })],
});

const LIGHT = 'EEF3FA';
const infoPanel = bar(LIGHT, [
  new Paragraph({ spacing: { after: 60 }, children: [run('पलूस, सांगली · Palus, Sangli', { color: NAVY, size: 24, bold: true })] }),
  ...taglines.map((t, i) => new Paragraph({ spacing: { after: 40 },
    children: [run(t, { color: i === 0 ? ORANGE : NAVY, size: i === 0 ? 21 : 19, bold: true })] })),
  new Paragraph({ spacing: { before: 80 }, children: [run('📍 पलूस-तासगांव रोड, लाईफकेअर हॉस्पिटल समोर, पलूस, जि. सांगली, महाराष्ट्र - 416310', { size: 18 })] }),
  new Paragraph({ spacing: { after: 80 }, children: [run('Palus-Tasgaon Road, opp. Lifecare Hospital, Palus, Dist. Sangli, Maharashtra - 416310', { color: MUTED, size: 17 })] }),
  new Paragraph({ children: [
    run('📞 संजय माळी (Sanjay Mali) — ', { size: 19 }), link('9960022128', 'tel:+919960022128', { color: '1765C1' }),
    run('     📞 संकेत माळी (Sanket Mali) — ', { size: 19 }), link('9359813768', 'tel:+919359813768', { color: '1765C1' }),
  ] }),
  new Paragraph({ spacing: { before: 60 }, children: [
    run('📷 Instagram: ', { size: 19 }),
    link('@yashwant_engineering_palus', 'https://www.instagram.com/yashwant_engineering_palus/', { color: '1765C1' }),
    run('     👍 Facebook: ', { size: 19 }),
    link('Yashwant Engineering', 'https://www.facebook.com/share/1Ew21nNqeK/', { color: '1765C1' }),
  ] }),
], cellMargins(140, 220, 140, 220), { left: { style: BorderStyle.SINGLE, size: 36, color: NAVY } });

const hoursBar = bar('FFF4EC', [new Paragraph({
  children: [
    run('🕘 बुधवार – सोमवार : सकाळी ९ ते संध्याकाळी ६ · मंगळवार सुट्टी', { color: ORANGE, bold: true, size: 19 }),
    run('   |   Wednesday – Monday : 9 AM – 6 PM · Tuesday Closed', { color: MUTED, size: 18 }),
  ],
})], cellMargins(100, 160, 100, 160), { left: { style: BorderStyle.SINGLE, size: 36, color: ORANGE } });

// ---------- sections & products ----------
const gap = (after = 120) => new Paragraph({ spacing: { after }, children: [] });
const body = [masthead, gap(80), infoPanel, gap(80), hoursBar];
const CODE_W = 760, PHOTO_W = 4000, DETAIL_W = CONTENT_W - CODE_W - PHOTO_W;

sections.forEach((sec, si) => {
  const accent = SECTION_COLORS[si % SECTION_COLORS.length];
  body.push(gap(160));
  body.push(bar(accent, [new Paragraph({
    keepNext: true,
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W - 320 }],
    children: [
      run(`${sec.num}.  ${sec.en}`, { color: 'FFFFFF', bold: true, size: 26 }),
      new TextRun({ children: ['\t'] }),
      run(sec.mr, { color: 'FFFFFF', bold: true, size: 26 }),
    ],
  })]));
  body.push(new Paragraph({ keepNext: true, spacing: { after: 100 }, children: [] }));

  sec.products.forEach(p => {
    const [mr = '', en = '', variant = ''] = p.names;
    const srcs = ORIGINALS[p.code] || [];
    const main = srcs[0] ? img(fit(srcs[0], 250, 250, `${p.code}-main.jpg`)) : null;
    const thumbs = srcs.slice(1, 3).map((s, i) => img(fit(s, 121, 121, `${p.code}-t${i}.jpg`, 6)));
    const thumbRuns = thumbs.flatMap((t, i) => (i ? [new TextRun({ text: ' ' }), t] : [t]));

    const SPEC_INNER = DETAIL_W - 260, LABEL_W = 1450;
    const dash = { style: BorderStyle.DASHED, size: 4, color: LINE };
    const specTable = new Table({
      width: { size: SPEC_INNER, type: WidthType.DXA }, columnWidths: [LABEL_W, SPEC_INNER - LABEL_W],
      layout: TableLayoutType.FIXED,
      borders: { ...noBorders, insideHorizontal: dash, insideVertical: noBorders.top },
      rows: p.specs.map(([k, v]) => new TableRow({ children: [
        new TableCell({ width: { size: LABEL_W, type: WidthType.DXA }, borders: { ...noBorders, bottom: dash },
          margins: cellMargins(30, 60, 30, 0), children: [new Paragraph({ children: [run(k, { color: MUTED, size: 18 })] })] }),
        new TableCell({ width: { size: SPEC_INNER - LABEL_W, type: WidthType.DXA }, borders: { ...noBorders, bottom: dash },
          margins: cellMargins(30, 0, 30, 0), children: [new Paragraph({ children: [run(v, { bold: true, size: 19 })] })] }),
      ] })),
    });

    const lineBorder = { style: BorderStyle.SINGLE, size: 6, color: LINE };
    body.push(new Table({
      width: { size: CONTENT_W, type: WidthType.DXA },
      columnWidths: [CODE_W, PHOTO_W, DETAIL_W], layout: TableLayoutType.FIXED,
      borders: { top: lineBorder, bottom: lineBorder, left: { style: BorderStyle.SINGLE, size: 24, color: accent }, right: lineBorder,
        insideHorizontal: noBorders.top, insideVertical: noBorders.top },
      rows: [new TableRow({ cantSplit: true, children: [
        new TableCell({
          width: { size: CODE_W, type: WidthType.DXA }, shading: fill(accent), verticalAlign: VerticalAlign.CENTER,
          borders: noBorders, margins: cellMargins(80, 40, 80, 40),
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run(p.code, { color: 'FFFFFF', bold: true, size: 26 })] })],
        }),
        new TableCell({
          width: { size: PHOTO_W, type: WidthType.DXA }, borders: noBorders, margins: cellMargins(140, 100, 140, 160),
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: main ? [main] : [] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: thumbRuns }),
          ],
        }),
        new TableCell({
          width: { size: DETAIL_W, type: WidthType.DXA }, borders: noBorders, margins: cellMargins(140, 160, 140, 100),
          children: [
            new Paragraph({ children: [run(mr, { color: accent, bold: true, size: 30 })] }),
            new Paragraph({ children: [run(en, { color: NAVY, bold: true, size: 22 })] }),
            new Paragraph({ spacing: { after: 100 }, children: [run(variant, { color: accent, bold: true, size: 17 })] }),
            specTable,
            new Paragraph({ children: [] }),
          ],
        }),
      ] })],
    }));
    body.push(new Paragraph({ spacing: { after: 100 }, children: [] }));
  });
});

// ---------- closing band ----------
body.push(gap(120));
body.push(new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [CONTENT_W], layout: TableLayoutType.FIXED,
  borders: { ...noBorders, insideHorizontal: noBorders.top, insideVertical: noBorders.top },
  rows: [new TableRow({ cantSplit: true, children: [new TableCell({
    width: { size: CONTENT_W, type: WidthType.DXA }, shading: fill(ORANGE), borders: noBorders,
    margins: cellMargins(200, 200, 200, 200),
    children: footerLines.map((l, i) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
      children: [run(l, { color: 'FFFFFF', bold: i === 0, size: i === 0 ? 22 : 19 })] })),
  })] })],
}));

// ---------- document ----------
const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 16838 },
      margin: { top: 300, bottom: MARGIN, left: MARGIN, right: MARGIN, footer: 300 } } },
    footers: { default: new Footer({ children: [new Paragraph({
      border: { top: { style: BorderStyle.SINGLE, size: 12, color: ORANGE, space: 4 } },
      tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
      children: [
        run('यशवंत इंजिनिअरिंग, पलूस · Yashwant Engineering · 9960022128 · 9359813768', { color: MUTED, size: 15 }),
        new TextRun({ children: ['\t', PageNumber.CURRENT, ' / ', PageNumber.TOTAL_PAGES], font: FONT, color: MUTED, size: 15 }),
      ],
    })] }) },
    children: body,
  }],
});

Packer.toBuffer(doc).then(async raw => {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(raw);
  let settings = await zip.file('word/settings.xml').async('string');
  if (!settings.includes('doNotAutoCompressPictures')) {
    settings = settings.replace('</w:settings>', '<w:doNotAutoCompressPictures/></w:settings>');
    zip.file('word/settings.xml', settings);
  }
  const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync(OUT, buf);
  const n = sections.reduce((a, s) => a + s.products.length, 0);
  console.log(`written ${path.basename(OUT)}: ${sections.length} sections, ${n} products, ${(buf.length / 1024 / 1024).toFixed(1)} MB`);
});
