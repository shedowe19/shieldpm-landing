import sys
import argparse
from PIL import Image
from collections import Counter
from typing import List, Tuple

def get_dominant_colors(image_path: str, num_colors: int = 5) -> List[Tuple[Tuple[int, int, int], int]]:
    """
    Extract dominant colors from an image.
    
    Args:
        image_path: Path to the image file
        num_colors: Number of dominant colors to return
        
    Returns:
        List of tuples containing ((r,g,b), count)
    """
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((150, 150))
        pixels = list(image.getdata())
        counts = Counter(pixels)
        dominant_colors = counts.most_common(num_colors)
        return dominant_colors
    except Exception as e:
        print(f"Error processing image {image_path}: {e}")
        return []

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract dominant colors from an image.")
    parser.add_argument("image_path", nargs="?", default="public/logo-256.png", help="Path to the image file")
    parser.add_argument("--count", type=int, default=5, help="Number of colors to extract")
    
    args = parser.parse_args()
    
    colors = get_dominant_colors(args.image_path, args.count)
    
    if colors:
        print(f"Dominant Colors (RGB) for {args.image_path}:")
        for color, count in colors:
            hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
            print(f"RGB: {color} - Hex: {hex_color} - Count: {count}")
    else:
        sys.exit(1)
