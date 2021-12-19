#!/bin/bash

convert -density 300 "$@" "%03d.jpg"

jpg_list=$(find . -maxdepth 1 -type f -name "*.jpg" -exec basename {} \; | tr "\n" " ")

python3 create_pptx.py $jpg_list

rm $jpg_list
