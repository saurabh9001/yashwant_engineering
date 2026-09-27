import io, sys, zipfile
import pikepdf
from PIL import Image
docx, src_pdf, out_pdf = sys.argv[1:4]

def sig(im):
    im = im.convert('L').resize((24, 24))
    return list(im.getdata())

# full-resolution photos from the Word file
media = []
with zipfile.ZipFile(docx) as z:
    for n in z.namelist():
        if n.startswith('word/media/') and not n.endswith('/'):
            data = z.read(n)
            im = Image.open(io.BytesIO(data))
            media.append({'name': n, 'data': data, 'w': im.width, 'h': im.height, 'sig': sig(im), 'fmt': im.format})

pdf = pikepdf.open(src_pdf)
done = {}
report = []
for pno, page in enumerate(pdf.pages, 1):
    for key, obj in page.images.items():
        og = obj.objgen
        if og in done:
            continue
        pim = pikepdf.PdfImage(obj)
        small = pim.as_pil_image()
        aspect = small.width / small.height
        s = sig(small)
        best = min(
            (m for m in media if abs(m['w'] / m['h'] - aspect) / aspect < 0.03),
            key=lambda m: sum((a - b) ** 2 for a, b in zip(m['sig'], s)),
            default=None)
        if best is None or best['fmt'] != 'JPEG':
            report.append(f'p{pno} {small.width}x{small.height}: kept (no match)')
            done[og] = True
            continue
        err = sum((a - b) ** 2 for a, b in zip(best['sig'], s)) / len(s)
        obj.write(best['data'], filter=pikepdf.Name.DCTDecode)
        obj.Width, obj.Height = best['w'], best['h']
        obj.ColorSpace = pikepdf.Name.DeviceRGB
        obj.BitsPerComponent = 8
        for k in ('/DecodeParms', '/Decode'):
            if k in obj:
                del obj[k]
        done[og] = True
        report.append(f'p{pno} {small.width}x{small.height} -> {best["w"]}x{best["h"]}  (match error {err:.0f})')
pdf.save(out_pdf, compress_streams=True)
print('\n'.join(report))
print('replaced', sum(1 for r in report if '->' in r), 'of', len(report))
