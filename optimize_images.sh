#!/bin/bash
# =======================================================
# Nature For Humanity - Image Optimization Script
# Automatically resizes and compresses images
# Author: Magoola Scanlen Derrick (Nature For Humanity)
# =======================================================

ASSETS_DIR="assets"
MAX_WIDTH=1500
QUALITY=85

echo "🌿 Optimizing images in: $ASSETS_DIR ..."

# Check if folder exists
if [ ! -d "$ASSETS_DIR" ]; then
  echo "❌ Error: '$ASSETS_DIR' folder not found."
  exit 1
fi

# Create backup
mkdir -p "${ASSETS_DIR}_backup"
cp $ASSETS_DIR/* "${ASSETS_DIR}_backup"/
echo "📦 Backup created in ${ASSETS_DIR}_backup"

# Optimize each image
for img in $ASSETS_DIR/*.{jpg,jpeg,png}; do
  [ -e "$img" ] || continue
  echo "🖼️ Processing: $img ..."
  mogrify -resize ${MAX_WIDTH}x -quality $QUALITY "$img"
done

echo "✅ Optimization complete! All images resized to max width ${MAX_WIDTH}px and compressed."
