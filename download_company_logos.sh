#!/usr/bin/env bash

set -uo pipefail

mkdir -p company-logos
cd company-logos

domains=(
  "maersk.com" "cma-cgm.com" "msc.com" "hapag-lloyd.com" "one-line.com"
  "coscoshipping.com" "oocl.com" "unifeeder.com" "hmm21.com" "pilship.com"
  "yangming.com" "sidraline.com" "arkas.com.tr" "bmw.com" "nissan-global.com"
  "globalsuzuki.com" "geely.com" "otsuka.com" "aboughalymotors.com"
  "mansourauto.com" "mobica.net" "kg-mobility.com" "jushi.com"
)

for domain in "${domains[@]}"; do
  filename="${domain%%.*}"
  echo "Downloading ${filename}.png..."
  tmp_file="${filename}.tmp"
  output_file="${filename}.png"

  rm -f "${tmp_file}" "${output_file}"

  if wget -q -O "${tmp_file}" "https://www.google.com/s2/favicons?domain=${domain}&sz=128" && [ -s "${tmp_file}" ]; then
    mv "${tmp_file}" "${output_file}"
  else
    rm -f "${tmp_file}"
    echo "Failed: ${domain}"
  fi
done

echo "Done! All logos downloaded."
