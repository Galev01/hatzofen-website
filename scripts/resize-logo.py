#!/usr/bin/env python3
"""
Resize the logo to exactly match the display dimensions to save bandwidth
"""

import os
import sys

def resize_logo_with_imageio():
    """Use imageio for image resizing as a fallback"""
    try:
        import imageio.v3 as iio
        import numpy as np
        from scipy import ndimage
        
        input_path = "../static/logos/Tzofen_logo2.webp"
        output_path = "../static/logos/Tzofen_logo2_optimized.webp"
        
        print("Using imageio for resizing...")
        
        # Read image
        img = iio.imread(input_path)
        print(f"Original size: {img.shape[1]}x{img.shape[0]}")
        
        # Resize to exact display dimensions
        target_size = (320, 500)  # width, height
        zoom_factors = (target_size[1] / img.shape[0], target_size[0] / img.shape[1])
        
        resized = ndimage.zoom(img, zoom_factors + (1,) if len(img.shape) == 3 else zoom_factors, order=1)
        
        # Save optimized image
        iio.imwrite(output_path, resized, format='webp', quality=85)
        
        # Check file sizes
        original_size = os.path.getsize(input_path)
        new_size = os.path.getsize(output_path)
        
        print(f"Resized to: {target_size[0]}x{target_size[1]}")
        print(f"Original file: {original_size:,} bytes")
        print(f"Optimized file: {new_size:,} bytes")
        print(f"Savings: {original_size - new_size:,} bytes ({((original_size - new_size) / original_size * 100):.1f}%)")
        
        return True
        
    except ImportError as e:
        print(f"imageio not available: {e}")
        return False

def resize_logo_with_pil():
    """Use PIL for image resizing"""
    try:
        from PIL import Image
        
        input_path = "../static/logos/Tzofen_logo2.webp"
        output_path = "../static/logos/Tzofen_logo2_optimized.webp"
        
        print("Using PIL for resizing...")
        
        with Image.open(input_path) as img:
            print(f"Original size: {img.size}")
            
            # Resize to exact display dimensions
            target_size = (320, 500)  # width, height
            resized = img.resize(target_size, Image.Resampling.LANCZOS)
            
            # Save with high optimization
            resized.save(output_path, 
                        format='WebP', 
                        quality=85, 
                        method=6,  # Maximum compression
                        optimize=True)
            
            # Check file sizes
            original_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            
            print(f"Resized to: {target_size}")
            print(f"Original file: {original_size:,} bytes")
            print(f"Optimized file: {new_size:,} bytes")
            print(f"Savings: {original_size - new_size:,} bytes ({((original_size - new_size) / original_size * 100):.1f}%)")
            
            return True
            
    except ImportError as e:
        print(f"PIL not available: {e}")
        return False

def create_small_logo_css():
    """Create a CSS-based approach for smaller logo"""
    css_content = """
/* Optimized logo sizing to match exact display dimensions */
.hero-logo {
    width: 320px !important;
    height: 500px !important;
    object-fit: contain;
    max-width: 100%;
    height: auto;
}

@media (max-width: 640px) {
    .hero-logo {
        width: 240px !important;
        height: 375px !important;
    }
}

@media (max-width: 480px) {
    .hero-logo {
        width: 160px !important;
        height: 250px !important;
    }
}
"""
    
    with open("../src/lib/components/landing/hero-logo-optimization.css", "w") as f:
        f.write(css_content)
    
    print("Created CSS optimization file: hero-logo-optimization.css")
    print("Add this to your Hero.svelte component or app.css")

if __name__ == "__main__":
    print("Optimizing logo image for exact display size...")
    
    # Try PIL first, then imageio as fallback
    success = resize_logo_with_pil()
    
    if not success:
        success = resize_logo_with_imageio()
    
    if not success:
        print("Could not resize image. Creating CSS optimization instead...")
        create_small_logo_css()
        print("\nTo install image libraries:")
        print("  pip install Pillow")
        print("  or")
        print("  pip install imageio scipy")
    else:
        print("\nSuccess! Update your Hero.svelte to use:")
        print('src="/logos/Tzofen_logo2_optimized.webp"')
