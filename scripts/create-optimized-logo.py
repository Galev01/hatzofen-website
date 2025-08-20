#!/usr/bin/env python3
"""
Create optimized logo sizes using Pillow (PIL)
This script creates responsive image sizes without requiring ImageMagick
"""

import os
from PIL import Image

def optimize_logo():
    """Create optimized logo sizes for responsive delivery"""
    
    input_dir = "../static/logos"
    input_file = "Tzofen_logo2.webp"
    input_path = os.path.join(input_dir, input_file)
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return False
    
    try:
        # Open the original image
        with Image.open(input_path) as img:
            print(f"Original image size: {img.size}")
            
            # Create optimized sizes
            sizes = [
                ("small", 160, 80),    # Mobile
                ("medium", 240, 85),   # Tablet  
                ("large", 320, 90)     # Desktop (current display size)
            ]
            
            for size_name, width, quality in sizes:
                # Calculate proportional height
                height = int(img.height * width / img.width)
                
                # Resize image
                resized = img.resize((width, height), Image.Resampling.LANCZOS)
                
                # Save with optimization
                output_path = os.path.join(input_dir, f"Tzofen_logo2_{size_name}.webp")
                resized.save(output_path, 
                           format='WebP', 
                           quality=quality, 
                           method=6,  # Maximum compression
                           optimize=True)
                
                # Get file size
                file_size = os.path.getsize(output_path)
                print(f"Created: {output_path} - {width}x{height}px - {file_size:,} bytes")
            
            return True
            
    except Exception as e:
        print(f"Error processing image: {e}")
        return False

if __name__ == "__main__":
    print("Creating optimized logo sizes...")
    if optimize_logo():
        print("\nSuccess! Update your Hero.svelte component with:")
        print('srcset="/logos/Tzofen_logo2_small.webp 160w,')
        print('       /logos/Tzofen_logo2_medium.webp 240w,')
        print('       /logos/Tzofen_logo2_large.webp 320w"')
        print('sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 320px"')
    else:
        print("Failed to create optimized images")
        print("You may need to install Pillow: pip install Pillow")
