#!/bin/bash
# usage: ./render.sh <name> <height>
D="/Users/zheng/Documents/GitHub/JE/artifacts/homepage-redesign-v2"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1440,$2 \
  --screenshot="$D/img/$1.png" --virtual-time-budget=6000 "$D/mock/$1.html" 2>/dev/null
echo "$1 -> $(du -h "$D/img/$1.png" | cut -f1)"
