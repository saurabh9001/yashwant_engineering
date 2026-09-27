#!/usr/bin/env python3
"""Build a coloured A4 PDF catalog from catalog-sample.md.

Usage:  python3 build-catalog.py
Output: catalog.html (print layout) and Yashwant-Engineering-Catalog.pdf
Needs Google Chrome installed (used to print the HTML to PDF).
"""
import html
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "catalog-sample.md"
OUT_HTML = ROOT / "catalog.html"
OUT_PDF = ROOT / "Yashwant-Engineering-Catalog.pdf"
BUILD = ROOT / ".catalog-build"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# One accent colour per section, in order.
SECTION_COLORS = ["#1765c1", "#e8621a", "#2e8b57", "#0f8a8a", "#b3261e", "#6b46c1"]


def strip_md(text):
    return re.sub(r"\*\*?|\\", "", text).strip()


def parse(md):
    header = md.split("</div>")[0]
    taglines = re.findall(r"^\*\*([^*]+)\*\*$", header, re.M)

    sections = []
    for m in re.finditer(r"^## (\d+)\. (.+?)\n(.*?)(?=^## |\n---|\Z)", md, re.M | re.S):
        num, title, body = m.groups()
        en, _, mr = title.partition(" — ")
        products = []
        for row in re.findall(r"^\| \*\*(\d{3})\*\* \|(.+)$", body, re.M):
            code, rest = row
            cells = [c.strip() for c in rest.rstrip("|").split(" | ")]
            name_cell, photo_cell, spec_cell = cells[0], cells[1], cells[2]
            names = [strip_md(x) for x in name_cell.split("<br>")]
            photos = re.findall(r'src="([^"]+)"', photo_cell)
            specs = []
            for line in spec_cell.split("<br>"):
                label, sep, value = line.partition(":-")
                if sep:
                    specs.append((strip_md(label), strip_md(value)))
            products.append({"code": code, "names": names, "photos": photos, "specs": specs})
        sections.append({"num": num, "en": en.strip(), "mr": mr.strip(), "products": products})

    footer = []
    last_div = md.rfind('<div align="center">')
    if last_div != -1:
        block = md[last_div:].split("</div>")[0].splitlines()[1:]
        footer = [strip_md(l.replace("&nbsp;", " ")) for l in block if l.strip()]

    return {
        "taglines": [t.strip() for t in taglines],
        "sections": sections,
        "footer": footer,
    }


def render(data):
    e = html.escape
    parts = []
    for i, sec in enumerate(data["sections"]):
        color = SECTION_COLORS[i % len(SECTION_COLORS)]
        cards = []
        for p in sec["products"]:
            mr = p["names"][0] if p["names"] else ""
            en = p["names"][1] if len(p["names"]) > 1 else ""
            sub = p["names"][2].strip("()") if len(p["names"]) > 2 else ""
            main, *thumbs = p["photos"] or [""]
            thumbs_html = "".join(f'<img src="{e(t)}" alt="">' for t in thumbs[:2])
            specs_html = "".join(
                f"<tr><th>{e(k)}</th><td>{e(v)}</td></tr>" for k, v in p["specs"]
            )
            cards.append(f"""
      <article class="product">
        <div class="code">{e(p['code'])}</div>
        <div class="photos">
          <img class="main" src="{e(main)}" alt="{e(en)}">
          <div class="thumbs">{thumbs_html}</div>
        </div>
        <div class="details">
          <h3 class="name-mr">{e(mr)}</h3>
          <p class="name-en">{e(en)}</p>
          {f'<span class="variant">{e(sub)}</span>' if sub else ''}
          <table class="specs">{specs_html}</table>
        </div>
      </article>""")
        parts.append(f"""
    <section style="--accent:{color}">
      <h2><span class="num">{e(sec['num'])}</span><span class="en">{e(sec['en'])}</span><span class="mr">{e(sec['mr'])}</span></h2>
      {''.join(cards)}
    </section>""")

    footer_lines = data["footer"]
    footer_html = "".join(f"<p>{e(l)}</p>" for l in footer_lines)

    return f"""<!doctype html>
<html lang="mr">
<head>
<meta charset="utf-8">
<title>Yashwant Engineering — Product Catalog</title>
<style>
  @page {{
    size: A4; margin: 12mm 11mm 14mm;
    @bottom-left {{ content: "यशवंत इंजिनिअरिंग, पलूस · Yashwant Engineering & Welding Works, Palus  ·  9960022128 · 9359813768"; font: 7.5pt -apple-system, "Kohinoor Devanagari", sans-serif; color: #5a6778; }}
    @bottom-right {{ content: counter(page) " / " counter(pages); font: 7.5pt -apple-system, sans-serif; color: #5a6778; }}
  }}
  :root {{ --navy:#0f2f5c; --blue:#1765c1; --orange:#e8621a; --ink:#16202e; --muted:#5a6778; --line:#dde4ec; }}
  * {{ box-sizing: border-box; }}
  html {{ -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
  body {{ margin:0; font-family: -apple-system, "Helvetica Neue", "Kohinoor Devanagari", "Devanagari Sangam MN", sans-serif; color:var(--ink); font-size:10.5pt; line-height:1.45; }}

  /* Header */
  .masthead {{ background: linear-gradient(120deg, var(--navy) 0%, #174a8c 60%, var(--blue) 100%); color:#fff; border-radius:14px; padding:18px 22px; display:flex; gap:20px; align-items:center; position:relative; overflow:hidden; }}
  .masthead::after {{ content:""; position:absolute; right:-60px; top:-60px; width:220px; height:220px; border-radius:50%; background:rgba(232,98,26,.22); }}
  .logo {{ background:#fff; border-radius:12px; padding:8px; flex:none; box-shadow:0 4px 14px rgba(0,0,0,.25); position:relative; z-index:1; }}
  .logo img {{ width:120px; display:block; }}
  .brand {{ position:relative; z-index:1; }}
  .brand h1 {{ margin:0; font-size:23pt; line-height:1.15; font-weight:800; }}
  .brand .en {{ margin:2px 0 8px; font-size:13pt; font-weight:800; letter-spacing:.06em; color:#ffb27d; }}
  .taglines {{ display:flex; flex-direction:column; align-items:flex-start; gap:4px; margin-bottom:8px; }}
  .tagline {{ display:inline-block; background:var(--orange); color:#fff; font-weight:700; font-size:9pt; padding:3px 12px; border-radius:999px; }}
  .address {{ margin:0 0 8px; font-size:9.5pt; opacity:.95; }}
  .contacts {{ display:flex; flex-wrap:wrap; gap:6px; }}
  .chip {{ background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.28); border-radius:8px; padding:3px 10px; font-size:9pt; white-space:nowrap; }}
  .chip b {{ color:#fff; }}

  .datebar {{ display:flex; justify-content:space-between; align-items:center; margin:10px 0 4px; padding:7px 14px; background:#fff4ec; border:1px solid #f6d3bd; border-left:5px solid var(--orange); border-radius:8px; font-size:9.5pt; }}
  .datebar b {{ color:var(--orange); }}
  .datebar .small {{ color:var(--muted); font-size:8.5pt; padding-left:20px; }}
  .datebar .right {{ text-align:right; }}
  .datebar .right .small {{ padding-left:0; }}

  /* Sections */
  section {{ margin-top:14px; }}
  h2 {{ display:flex; align-items:center; gap:10px; margin:0 0 8px; padding:8px 14px; background:var(--accent); color:#fff; border-radius:10px; font-size:13pt; break-after:avoid; }}
  h2 .num {{ background:#fff; color:var(--accent); width:26px; height:26px; border-radius:50%; display:grid; place-items:center; font-size:11pt; font-weight:800; flex:none; }}
  h2 .mr {{ margin-left:auto; font-weight:600; opacity:.95; }}

  .product {{ display:grid; grid-template-columns: 30px 230px 1fr; gap:12px; padding:10px; margin-bottom:8px; border:1px solid var(--line); border-left:5px solid var(--accent); border-radius:10px; break-inside:avoid; background:#fff; }}
  .code {{ writing-mode:vertical-rl; transform:rotate(180deg); text-align:center; font-weight:800; font-size:13pt; color:#fff; background:var(--accent); border-radius:8px; letter-spacing:.1em; display:flex; align-items:center; justify-content:center; }}
  .photos .main {{ width:230px; height:165px; object-fit:cover; border-radius:8px; display:block; }}
  .thumbs {{ display:flex; gap:6px; margin-top:6px; }}
  .thumbs img {{ width:112px; height:74px; object-fit:cover; border-radius:6px; }}
  .name-mr {{ margin:0; font-size:15pt; color:var(--accent); line-height:1.2; }}
  .name-en {{ margin:1px 0 4px; font-size:11pt; font-weight:700; color:var(--navy); }}
  .variant {{ display:inline-block; font-size:8.5pt; font-weight:700; color:var(--accent); background:color-mix(in srgb, var(--accent) 12%, white); border-radius:999px; padding:2px 10px; margin-bottom:6px; }}
  .specs {{ width:100%; border-collapse:collapse; font-size:9.5pt; }}
  .specs th {{ text-align:left; font-weight:600; color:var(--muted); padding:2px 10px 2px 0; white-space:nowrap; vertical-align:top; width:1%; }}
  .specs td {{ font-weight:700; padding:2px 0; border-bottom:1px dashed var(--line); }}
  .specs tr:last-child td {{ border-bottom:none; }}

  /* Closing band */
  .closing {{ margin-top:14px; padding:14px 18px; border-radius:12px; background:linear-gradient(120deg, var(--orange), #f08a3c); color:#fff; text-align:center; break-inside:avoid; }}
  .closing p {{ margin:3px 0; }}
  .closing p:first-child {{ font-weight:800; font-size:11pt; }}

</style>
</head>
<body>

  <header class="masthead">
    <div class="logo"><img src="img/logo/logo-web.jpg" alt="Yashwant Engineering logo"></div>
    <div class="brand">
      <h1>यशवंत इंजिनिअरिंग अँड वेल्डींग वर्क्स</h1>
      <p class="en">YASHWANT ENGINEERING &amp; WELDING WORKS</p>
      <div class="taglines">{''.join(f'<span class="tagline">{e(t)}</span>' for t in data['taglines'])}</div>
      <p class="address">📍 पलूस-तासगांव रोड, लाईफकेअर हॉस्पिटल समोर, पलूस, जि. सांगली, महाराष्ट्र<br><span style="opacity:.85">Palus-Tasgaon Road, opp. Lifecare Hospital, Palus, Dist. Sangli, Maharashtra</span></p>
      <div class="contacts">
        <span class="chip">📞 संजय माळी (Sanjay Mali) — <b>9960022128</b></span>
        <span class="chip">📞 संकेत माळी (Sanket Mali) — <b>9359813768</b></span>
        <span class="chip">📷 <b>@yashwant_engineering_palus</b></span>
      </div>
    </div>
  </header>

  <div class="datebar">
    <div>🕘 <b>बुधवार – सोमवार : सकाळी ९ ते संध्याकाळी ६ · मंगळवार सुट्टी</b><br><span class="small">Wednesday – Monday : 9 AM – 6 PM · Tuesday Closed</span></div>
    <div class="right"><b>उत्पादन सूची</b><br><span class="small">Product Catalog</span></div>
  </div>
  {''.join(parts)}

  <div class="closing">{footer_html}</div>
</body>
</html>
"""


def shrink_photos(data):
    """Make small copies of the photos so the PDF stays light enough for WhatsApp."""
    BUILD.mkdir(exist_ok=True)
    for sec in data["sections"]:
        for p in sec["products"]:
            small = []
            for i, src in enumerate(p["photos"]):
                out = BUILD / pathlib.Path(src).name
                if not out.exists() or out.stat().st_mtime < (ROOT / src).stat().st_mtime:
                    size = "700" if i == 0 else "360"
                    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "72",
                                    "-Z", size, str(ROOT / src), "--out", str(out)],
                                   check=True, capture_output=True)
                small.append(out.relative_to(ROOT).as_posix())
            p["photos"] = small


def main():
    data = parse(SRC.read_text(encoding="utf-8"))
    shrink_photos(data)
    OUT_HTML.write_text(render(data), encoding="utf-8")
    count = sum(len(s["products"]) for s in data["sections"])
    print(f"catalog.html written: {len(data['sections'])} sections, {count} products")
    subprocess.run([
        CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        f"--user-data-dir={BUILD / 'chrome-profile'}",
        f"--print-to-pdf={OUT_PDF}", "--virtual-time-budget=5000",
        OUT_HTML.as_uri(),
    ], check=True, capture_output=True, timeout=180)
    print(f"PDF written: {OUT_PDF.name}")


if __name__ == "__main__":
    main()
