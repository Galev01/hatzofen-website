#!/bin/bash

# Image optimization script for responsive delivery
# This script uses ImageMagick to create optimized sizes of the logo

INPUT_DIR="../static/logos"
OUTPUT_DIR="../static/logos"
INPUT_FILE="Tzofen_logo2.webp"

echo "Creating responsive image sizes for: $INPUT_FILE"

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install ImageMagick to use this script."
    echo "Installation:"
    echo "  Windows: choco install imagemagick"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt install imagemagick"
    exit 1
fi

# Use 'magick' if available, otherwise fall back to 'convert'
if command -v magick &> /dev/null; then
    CONVERT_CMD="magick"
else
    CONVERT_CMD="convert"
fi

# Get original dimensions
ORIGINAL_DIMS=$($CONVERT_CMD identify -format "%wx%h" "$INPUT_DIR/$INPUT_FILE")
echo "Original dimensions: $ORIGINAL_DIMS"

# Create different sizes based on typical usage
# Mobile (small): 160px width
# Tablet (medium): 240px width  
# Desktop (large): 320px width (current display size)

echo "Generating responsive sizes..."

# Small size (mobile)
$CONVERT_CMD "$INPUT_DIR/$INPUT_FILE" -resize 160x250 -quality 85 "$OUTPUT_DIR/Tzofen_logo2_small.webp"
echo "Created: Tzofen_logo2_small.webp (160px width)"

# Medium size (tablet)
$CONVERT_CMD "$INPUT_DIR/$INPUT_FILE" -resize 240x375 -quality 85 "$OUTPUT_DIR/Tzofen_logo2_medium.webp"
echo "Created: Tzofen_logo2_medium.webp (240px width)"

# Large size (desktop) - optimized for 320px display
$CONVERT_CMD "$INPUT_DIR/$INPUT_FILE" -resize 320x500 -quality 85 "$OUTPUT_DIR/Tzofen_logo2_large.webp"
echo "Created: Tzofen_logo2_large.webp (320px width)"

# Show file sizes
echo ""
echo "File sizes:"
du -h "$OUTPUT_DIR"/Tzofen_logo2*.webp

echo ""
echo "Responsive images created successfully!"
echo "Update your Hero.svelte component to use:"
echo "  <img srcset=\"/logos/Tzofen_logo2_small.webp 160w,"
echo "              /logos/Tzofen_logo2_medium.webp 240w,"
echo "              /logos/Tzofen_logo2_large.webp 320w\""
echo "       sizes=\"(max-width: 640px) 160px,"
echo "              (max-width: 1024px) 240px,"
echo "              320px\""
echo "       src=\"/logos/Tzofen_logo2_large.webp\""
echo "       alt=\"הצופן App Logo\" />"
