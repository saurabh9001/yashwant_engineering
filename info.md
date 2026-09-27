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
| Instagram | https://www.instagram.com/yashwant_engineering_palus/ (one underscore between each word) |
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
| `catalog-tools/` | Scripts that build the Word file and the sharp PDF — run `make-pdf.sh` (see section 5) |
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

## 5. How the catalog becomes a Word file and a PDF

### The short version (use this)
1. Edit **`catalog-sample.md`** (text, specs) — and, for new photos, `ORIGINALS` in `catalog-tools/build.js`.
2. Open **Terminal** and run:
   ```bash
   cd ~/Desktop/yashwant_engineering-main/catalog-tools
   ./make-pdf.sh
   ```
3. Wait ~1–2 minutes (Word opens and closes by itself once). When it prints **Done**, the two files in the
   project folder are updated:
   - `Yashwant-Engineering-Catalog.docx` — Word version
   - `Yashwant-Engineering-Catalog.pdf` — **share this one** (sharp photos, clickable links)
4. Upload to GitHub if you want (section 3).

The script needs internet (step 1 below) and Microsoft Word. Everything it downloads is deleted at the end.

### What happens inside — the 4 steps

```
catalog-sample.md ──┐
                    ├─► [1] build.js ──► .docx ──► [2] Microsoft Word ──► draft PDF ──► [3] sharpen.py ──► final PDF
original photos ────┘        (docx library)            ("Save as PDF")    (photos shrunk)    (pikepdf)       (photos sharp)
```

| Step | Tool | What it does |
|---|---|---|
| 0 | `npm install docx`, `pip install pikepdf pillow` | Downloads the helper libraries (see table below). |
| 1 | `node build.js` | Reads `catalog-sample.md` (names, specs, sections, footer), takes 3 **original** photos per product from `ORIGINALS`, turns each photo upright, fits it (never cropped) and writes the Word file with the full design: header banner, blue section bars, product cards, clickable links, page numbers. |
| 2 | Microsoft Word (via `osascript`) | Opens the Word file and saves a PDF. Word makes the layout perfect, **but shrinks every photo** (blurry when zooming). |
| 3 | `sharpen.py` | Opens Word's PDF, finds each shrunken photo, and replaces it with the full-resolution photo from the Word file. Layout, text and links are untouched. Prints `replaced 36 of 36` when all photos were swapped. |
| 4 | cleanup | Deletes the downloaded libraries and temporary files. |

### What gets downloaded (and why)

| Library | From | Size | Used for |
|---|---|---|---|
| `docx` | npm (Node.js package) | ~10 MB | Creating the Word (.docx) file in step 1 |
| `pikepdf` | pip (Python package) | ~20 MB | Swapping photos inside the PDF in step 3 |
| `pillow` | pip (Python package) | ~10 MB | Reading/comparing photos in step 3 |

They are installed **inside `catalog-tools/`** only (`node_modules/`, `.venv/`), never system-wide, and are
removed by `make-pdf.sh` when it finishes. They are also listed in `.gitignore`, so they never go to GitHub.

### Already on this Mac (nothing to download)
| Program | Check with | Used for |
|---|---|---|
| Node.js + npm | `node -v` | Running `build.js` |
| Python 3 | `python3 --version` | Running `sharpen.py` |
| Swift (Xcode) | `swiftc --version` | Compiling `upright.swift` (turns iPhone photos upright) — done automatically |
| Microsoft Word | — | Making the draft PDF |
| `sips` (built into macOS) | — | Resizing / converting photos |

On a **new Mac**: install Node.js (`brew install node`), Python 3 (`brew install python`), Xcode Command Line
Tools (`xcode-select --install`) and Microsoft Word.

### Files in `catalog-tools/`
| File | Purpose |
|---|---|
| `make-pdf.sh` | **Run this** — does all 4 steps |
| `build.js` | Step 1. Design of the Word file (colours, sizes, header, footer) and the `ORIGINALS` photo list |
| `sharpen.py` | Step 3. Puts full-resolution photos back into the PDF |
| `upright.swift` | Turns photos upright (compiled automatically on first use) |
| `package.json` | Notes that the tools need the `docx` library |

### Where catalog photos come from
The Word/PDF catalog does **not** use the photo paths written in `catalog-sample.md` (those point to small
preview copies in `img/catalog/`). It uses the **original full-size photos** listed in `ORIGINALS` near the
top of `catalog-tools/build.js` — 3 per product: first = big photo, next two = small photos.
For a new product, add a line, e.g.
```js
'205': ['img/photos/IMG_1234', 'img/photos/IMG_1235', 'img/photos/IMG_1236'],
```
(no file extension needed — `.HEIC`, `.heic` or `.jpg` are all found). Put new phone photos in `img/photos/`.

### Common edits and where to make them
| I want to… | Edit |
|---|---|
| Change a product name, spec, or add/remove a product | `catalog-sample.md` |
| Change a product's photos | `ORIGINALS` in `catalog-tools/build.js` |
| Change phone numbers, address, Instagram, Facebook, hours in the header | the "header banner" part of `catalog-tools/build.js` **and** the top of `catalog-sample.md` |
| Change the closing orange box text | bottom of `catalog-sample.md` |
| Change colours | `NAVY`, `ORANGE`, `SECTION_COLORS` at the top of `catalog-tools/build.js` |
| Change photo sizes | `fit(srcs[0], 250, 250, …)` (big photo) and `fit(s, 121, 121, …)` (small photos) in `build.js` |

After any edit, run `./make-pdf.sh` again.

### Rules / why it is built this way
- **Never share a PDF saved directly from Word** — Word shrinks the photos. Always use `make-pdf.sh`.
- **Photos are never cropped** — each whole photo is fitted into a square box.
- **Page 1 top = only logo + large name**, so the **WhatsApp preview** looks clear. Keep small text out of it.
- iPhone photos are rotated upright first, otherwise some appear sideways.

### If something goes wrong
| Problem | Fix |
|---|---|
| `npm` / `pip` download fails | Check internet. If `github.com` also fails, restart the Wi-Fi router (IPv4 problem seen before). |
| Word asks for permission | Allow Terminal to control Microsoft Word (System Settings → Privacy & Security → Automation). |
| `photo not found: …` | A path in `ORIGINALS` is wrong or the photo was moved/renamed. |
| `replaced 30 of 36` (not all) | The PDF still works; those photos just stay slightly soft. Re-run once. |
| A photo is sideways | Delete `catalog-tools/upright` and run again. |

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
