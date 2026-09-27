# Yashwant Engineering — Project Info

Everything needed to update the **website**, the **product catalog (.md)**, and the **Word / PDF catalog** later.
Read this first before changing anything.

---

## 1. Business details (use these everywhere)

| Item | Value |
|---|---|
| Name (Marathi) | यशवंत इंजिनिअरिंग |
| Name (English) | Yashwant Engineering *(do **not** add "& Welding Works")* |
| Tagline (Marathi) | ट्रॅक्टर ट्रॉली, शेतीचे गाडे, जनावरांसाठी साहित्य व इंडस्ट्रियल ट्रॉली उत्पादक |
| Tagline (English) | Manufacturer of Tractor Trolleys, Farm Carts (Gada), Cattle Equipment & Industrial Trolleys |
| Address (Marathi) | पलूस-तासगांव रोड, लाईफकेअर हॉस्पिटल समोर, पलूस, जि. सांगली, महाराष्ट्र - 416310 |
| Address (English) | Palus-Tasgaon Road, opp. Lifecare Hospital, Palus, Dist. Sangli, Maharashtra - 416310 |
| Phone 1 | संजय माळी (Sanjay Mali) — 9960022128 |
| Phone 2 | संकेत माळी (Sanket Mali) — 9359813768 |
| Instagram | https://www.instagram.com/yashwant__engineering_palus/ (two underscores after "yashwant") |
| Facebook | https://www.facebook.com/share/1Ew21nNqeK/ |
| Hours | बुधवार – सोमवार : सकाळी ९ ते संध्याकाळी ६ · मंगळवार सुट्टी — Wednesday – Monday 9 AM – 6 PM, **Tuesday closed** |
| Logo | `img/logo/logo.jpg` (original), `img/logo/logo-web.jpg` (small copy for the website) |

---

## 2. What is in this folder

| Path | What it is |
|---|---|
| `index.html`, `script.js`, `styles.css` | The website |
| `README.md` | Website how-to (add products, change prices, WhatsApp number) |
| `catalog-sample.md` | **Catalog source** — all product names and specifications live here |
| `Yashwant-Engineering-Catalog.docx` | Word catalog (built from `catalog-sample.md`) |
| `Yashwant-Engineering-Catalog.pdf` | Final PDF to share on WhatsApp (built from the Word file) |
| `catalog-tools/` | Scripts that build the Word file and the sharp PDF (see section 5) |
| `img/<code>/` | Website product photos (`1pt`, `2bt`, `3tt`, `4pat`, `5k5p`, `6k7p`, `7gg`, `8vg`, `9mg`, `10cf`, `11dc`) |
| `img/catalog/` | Small photo copies used only for previewing `catalog-sample.md` |
| `img/photos/` | **Original phone photos** (HEIC, full quality) — not uploaded to GitHub |
| `img/big dakala gada/` | Original photos of the big grape cart (catalog 204) — not uploaded to GitHub |
| `img/businnesscard/`, `img/store/` | Business card and workshop photos for the website |
| `old-site/` | Backup of the first website version |
| `KD September 2026.pdf` | Another company's rate list — used only as a layout reference, not uploaded |
| `build-catalog.py` | Old HTML→PDF attempt, **not used any more** (safe to delete) |

---

## 3. Website

- **Live site:** https://saurabh9001.github.io/yashwant_engineering/
- **GitHub repo:** https://github.com/saurabh9001/yashwant_engineering (branch `main`)
- **Products, prices, photos, translations:** the `products` list and `translations` at the top of `script.js`. Details in `README.md`.
- **Enquiries:** the form and "Order" buttons open WhatsApp to 9960022128 (`WHATSAPP_NUMBER` in `script.js`).
- **Publish changes:**
  ```bash
  git add -A
  git commit -m "Describe the change"
  git push origin main
  ```
  GitHub Pages updates in 1–2 minutes. If `git push` asks to log in, run `gh auth login` first.

---

## 4. Catalog content — `catalog-sample.md`

This file is the single source for the Word/PDF catalog. Edit text here, then rebuild (section 5).

### Numbering
| Series | Section |
|---|---|
| 1xx | Tractor Trolleys — ट्रॅक्टर ट्रॉली |
| 2xx | Farm Carts — शेतीचे गाडे |
| 3xx | Farm Implements — शेती अवजारे |
| 4xx | Cattle Equipment — जनावरांसाठी साहित्य |
| 5xx | Industrial Trolleys — इंडस्ट्रियल ट्रॉली |

### Current products
| No. | Marathi | English | Notes |
|---|---|---|---|
| 101 | बॉक्स ट्रॉली | Box Trolley | Red / Blue |
| 102 | पट्टी ट्रॉली | Patte Trolley | Jali body |
| 103 | फाळका ट्रॉली | Phalka Trolley | Drop-side |
| 104 | तळ ट्रॉली | Tal Trolley | Sheet floor + jali |
| 201 | द्राक्षबागेचा गाडा | Drakshe Bagecha Gada | With railing, blue |
| 202 | मोटर सायकलचा गाडा | Motorcycle Gada | Bike trolley |
| 203 | विटभट्टी सप्लाय गाडा | Brick Kiln Cart | Flat platform, 3 x 8 ft |
| 204 | द्राक्षबागेचा गाडा | Drakshe Bagecha Gada | Big, 600 kg, 17-inch tyres, 3 x 5 ft, blue |
| 301 | खुरूट | Cultivator | 5 or 7 फणी (one row — the 5 and 7 tine photos are the same) |
| 401 | जनावरांची गव्हाण | Cattle Feeder | Drum type |
| 402 | ड्रम गाडा | Drum Cart | 2 wheel |
| 501 | इंडस्ट्रियल प्लॅटफॉर्म ट्रॉली | Industrial Platform Trolley | 3.50-8 tyres, 400 kg, orange |

### Rules agreed for the catalog
- **No prices** in the catalog (customers call for prices).
- **Specifications in Marathi only** (e.g. `प्रकार :- **तीन चाकी ढकलगाडा**`). Sizes use `फूट` (e.g. `6 x 4 फूट`).
- **Everything else bilingual**: product names, section titles, table headings, header, footer (`मराठी · English`).
- **All sections use the same blue** (`1765C1`). Orange is used only for header/hours/closing accents.
- Phone, Instagram and Facebook must stay **clickable links**.

### Row format (one product = one line)
```
| **203** | **विटभट्टी सप्लाय गाडा**<br>Brick Kiln Cart<br>(सपाट प्लॅटफॉर्म · Flat Platform) | <photos> | प्रकार :- **तीन चाकी ढकलगाडा**<br>माप :- **3 x 8 फूट**<br>रंग :- **काळा** |
```
- Column 2: Marathi name (bold) `<br>` English name `<br>` (short label).
- Column 4: one spec per line, `लेबल :- **मूल्य**`, lines joined with `<br>`.
- To **add a product**: copy a row, give it the next number in its series, and add its photos (see below).

---

## 5. Build the Word file and the sharp PDF

### Where catalog photos come from
The Word/PDF catalog does **not** use the photo paths written in `catalog-sample.md` (those point to small
preview copies in `img/catalog/`).
It uses the **original full-size photos** listed in `ORIGINALS` near the top of `catalog-tools/build.js`
(3 per product: first = big photo, next two = small photos). For a new product, add a line there, e.g.
```js
'205': ['img/photos/IMG_1234', 'img/photos/IMG_1235', 'img/photos/IMG_1236'],
```
(no file extension needed — `.HEIC`, `.heic` or `.jpg` are all found).

### Needs (on this Mac)
- Node.js, Python 3, Microsoft Word (all installed now).
- Two helper libraries, installed only while building (then delete them):
  ```bash
  cd catalog-tools
  npm install docx
  python3 -m venv .venv && .venv/bin/pip install pikepdf pillow
  ```

### Steps
```bash
cd catalog-tools

# 1. Build the Word file from catalog-sample.md + original photos
node build.js
#    -> ../Yashwant-Engineering-Catalog.docx

# 2. Let Word make a draft PDF (Word shrinks photos here — that is fixed in step 3)
osascript -e 'tell application "Microsoft Word"
  set d to open file name (POSIX file "'"$PWD"'/../Yashwant-Engineering-Catalog.docx" as text)
  save as d file name (POSIX file "'"$PWD"'/.build/word-export.pdf" as text) file format format PDF
  close d saving no
end tell'

# 3. Put the full-resolution photos back into the PDF
.venv/bin/python sharpen.py ../Yashwant-Engineering-Catalog.docx .build/word-export.pdf ../Yashwant-Engineering-Catalog.pdf
#    prints "replaced 36 of 36" (or similar) when every photo was swapped

# 4. Clean up the helper libraries
rm -rf node_modules package-lock.json .venv .build
```

### Why it is done this way
- **Word's own "Save as PDF" shrinks photos** (blurry when zooming). `sharpen.py` swaps each shrunken photo
  in the PDF for the full-resolution one from the Word file — layout stays exactly the same.
  → **Always share the PDF made by these steps**, not a PDF saved directly from Word.
- **Photos are never cropped** — each whole photo is fitted into a square box (`fit()` in `build.js`).
- **Big header banner on page 1** (only logo + large name) so the **WhatsApp preview** of the PDF looks clear.
  Keep small text out of the top of page 1.
- Photos are rotated upright first (`upright.swift`, compiled automatically) — iPhone photos otherwise come out sideways.

---

## 6. Useful commands

Convert an iPhone photo (HEIC) to JPG for the website:
```bash
sips -s format jpeg -s formatOptions 75 -Z 1200 IMG_1234.HEIC --out img/2bt/new_IMG_1234.jpg
```

Preview the website locally:
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

---

## 7. Open items / to check

- [ ] **Website hours are wrong** — `index.html` / `script.js` still say Monday–Saturday; should be Wednesday–Monday, Tuesday closed.
- [ ] Website does not yet have **204 (big Drakshe Bagecha Gada)** or **501 (Industrial Platform Trolley)**; the orange trolley photos are still inside the grape cart (`img/7gg/`).
- [ ] Website still shows **prices**; the catalog does not. Decide if the website should keep them.
- [ ] Website Brick Kiln Cart still includes one **wrong photo** (`img/8vg/photo_6312248491190717729_y.jpg`).
- [ ] **Khurut 7 फणी** has no real photos (`img/6k7p/` is a copy of `img/5k5p/`).
- [ ] Catalog closing box says **"सांगली जिल्ह्यात डिलिव्हरी · Delivery in Sangli district"** — confirm or remove.
- [ ] Sizes missing (shown as "—"): 202 Motorcycle Gada, 301 Khurut, 401 Cattle Feeder, 402 Drum Cart.
- [ ] Older photos (Phalka, Tal, Brick Kiln, Khurut) are small Telegram copies (max 1280 px) — new phone photos would look sharper in the PDF.
