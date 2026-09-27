# Yashwant Engineering & Welding Works — Website

Product website for यशवंत इंजिनिअरिंग अँड वेल्डींग वर्क्स, Palus (Sangli): tractor trolleys, farm carts, cultivators and cattle equipment.

Plain HTML/CSS/JS — no build step, no server code.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page layout and default (Marathi) text |
| `styles.css` | All styling; colours are set at the top in `:root` |
| `script.js` | Products list, translations (मराठी / हिन्दी / English), filters, photo viewer, WhatsApp enquiry form |
| `img/<code>/` | Photos for each product (e.g. `img/2bt/` = Box Trolley) |
| `img/store/` | Workshop photos used in the top banner |
| `img/photos/` | Original phone photos (HEIC) — not used by the site directly |
| `old-site/` | Copy of the previous version of the site |

## Common changes

**Change a price, size or colour** — edit the product in the `products` list at the top of `script.js`. Set `priceLow`/`priceHigh` to `null` to show "call for price".

**Add a product**
1. Put its photos (JPG, about 1200px wide) in a new folder, e.g. `img/12xx/`.
2. Copy an existing entry in `products` in `script.js` and change `code`, `category`, `name`, `desc`, `size`, `colors`, prices and `images`.
3. `category` must be one of `trolleys`, `carts`, `implements`, `cattle`. Add `isNew: true` to show a "New" badge.

Convert iPhone HEIC photos on a Mac with:

```bash
sips -s format jpeg -s formatOptions 75 -Z 1200 IMG_1234.HEIC --out img/12xx/IMG_1234.jpg
```

**Change the WhatsApp number** — `WHATSAPP_NUMBER` at the top of `script.js`, plus the `wa.me` / `tel:` links in `index.html`.

**Change text** — every visible sentence has a key in `translations` in `script.js` (one block per language). The Marathi text in `index.html` is only shown before the script loads.

## How enquiries work

The contact form and every "Order on WhatsApp" button open WhatsApp with a pre-filled message (name, mobile, product) to 9960022128. Nothing is stored on a server.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Deploy

Upload the whole folder (except `img/photos/` and `old-site/`) to any static host — GitHub Pages, Netlify, or regular web hosting.
