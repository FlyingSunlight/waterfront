#!/bin/sh
# Assemble index.html from head.html + sections/*.html (in order) + foot.html
set -e
cd "$(dirname "$0")"
{
  cat head.html
  for f in sections/*.html; do
    printf '\n<!-- %s -->\n' "$f"
    cat "$f"
  done
  cat foot.html
} > index.html
echo "Built index.html ($(wc -c < index.html) bytes)"
