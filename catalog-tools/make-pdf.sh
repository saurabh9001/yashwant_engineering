#!/bin/bash
# Make the catalog Word file and the sharp PDF from catalog-sample.md in one go.
#
#   cd catalog-tools
#   ./make-pdf.sh
#
# Output (in the project folder):
#   Yashwant-Engineering-Catalog.docx
#   Yashwant-Engineering-Catalog.pdf   <- share this one
#
# Needs internet (downloads two helper libraries, then deletes them) and Microsoft Word.
# Full explanation: info.md, section 5.

set -euo pipefail
cd "$(dirname "$0")"
TOOLS="$PWD"
ROOT="$(cd .. && pwd)"
DOCX="$ROOT/Yashwant-Engineering-Catalog.docx"
PDF="$ROOT/Yashwant-Engineering-Catalog.pdf"

cleanup() {
  echo "==> Removing the helper libraries"
  rm -rf "$TOOLS/node_modules" "$TOOLS/package-lock.json" "$TOOLS/.venv" "$TOOLS/.build"
}
trap cleanup EXIT

for cmd in node npm python3 swiftc osascript; do
  command -v "$cmd" >/dev/null || { echo "Missing: $cmd (see info.md, section 5)"; exit 1; }
done
[ -d "/Applications/Microsoft Word.app" ] || { echo "Microsoft Word is not installed"; exit 1; }

echo "==> 1/4 Downloading helper libraries (docx, pikepdf, pillow)"
npm install --silent docx >/dev/null
python3 -m venv .venv
.venv/bin/pip install -q pikepdf pillow

echo "==> 2/4 Building the Word file from catalog-sample.md"
node build.js

echo "==> 3/4 Asking Microsoft Word to make a draft PDF"
mkdir -p .build
osascript <<EOF
tell application "Microsoft Word"
  set d to open file name (POSIX file "$DOCX" as text)
  save as d file name (POSIX file "$TOOLS/.build/word-export.pdf" as text) file format format PDF
  close d saving no
end tell
EOF

echo "==> 4/4 Putting full-resolution photos back into the PDF"
.venv/bin/python sharpen.py "$DOCX" .build/word-export.pdf "$PDF" 2>/dev/null | tail -1

echo
echo "Done:"
echo "  $DOCX"
echo "  $PDF"
