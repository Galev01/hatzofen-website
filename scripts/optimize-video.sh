#!/bin/bash

# Video optimization script for tzofen_video.mp4
# This script uses ffmpeg to create an optimized version of the video

INPUT_DIR="../static/videos"
OUTPUT_DIR="../static/videos"
INPUT_FILE="tzofen_video.mp4"
OUTPUT_FILE="tzofen_video_optimized.mp4"

echo "Optimizing video: $INPUT_FILE"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg is not installed. Please install ffmpeg to use this script."
    echo "Installation:"
    echo "  Windows: choco install ffmpeg"
    echo "  macOS: brew install ffmpeg"
    echo "  Ubuntu: sudo apt install ffmpeg"
    exit 1
fi

# Create optimized video with:
# - H.264 codec for compatibility
# - Reduced quality for smaller file size
# - Optimized for web playback
ffmpeg -i "$INPUT_DIR/$INPUT_FILE" \
    -c:v libx264 \
    -preset medium \
    -crf 28 \
    -profile:v baseline \
    -level 3.0 \
    -movflags +faststart \
    -an \
    -f mp4 \
    "$OUTPUT_DIR/$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "Video optimization completed successfully!"
    echo "Original file: $(du -h "$INPUT_DIR/$INPUT_FILE" | cut -f1)"
    echo "Optimized file: $(du -h "$OUTPUT_DIR/$OUTPUT_FILE" | cut -f1)"
    echo ""
    echo "To use the optimized video, update your Hero.svelte component to use:"
    echo "  src=\"/videos/tzofen_video_optimized.mp4\""
    echo ""
    echo "Or replace the original file:"
    echo "  mv \"$OUTPUT_DIR/$OUTPUT_FILE\" \"$INPUT_DIR/$INPUT_FILE\""
else
    echo "Video optimization failed!"
    exit 1
fi
