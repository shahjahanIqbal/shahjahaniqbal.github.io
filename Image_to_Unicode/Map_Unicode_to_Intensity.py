import pickle
from PIL import Image, ImageDraw, ImageFont
import unicodedata
import numpy as np

unicode_chars = [chr(i) for i in range(0x0000, 0x110000) if chr(i).isprintable()] # All printable unicode characters

def usable_chars(c):
    try:
        name = unicodedata.name(c)
        return (
            'BLOCK' in name or 
            'SHADE' in name or 
            'BOX DRAWINGS' in name or 
            c in " .:-=+*#%@█▓▒░"
        )
    except ValueError:
        return False

usable = [c for c in unicode_chars if usable_chars(c)]

def intensity_map(chars, font_path, size):
    font = ImageFont.truetype(font_path, size)
    intensity_list = []
    
    for ch in chars:
        # Create a square image with white background
        img = Image.new('L', (size, size), color=255)
        draw = ImageDraw.Draw(img)
        
        # Draw the character in black
        draw.text((0, 0), ch, fill=0, font=font)
        
        # Calculate mean intensity (0=black, 255=white)
        # We invert because we want darker pixels to have higher values
        mean_intensity = 255 - np.array(img).mean()
        intensity_list.append((ch, mean_intensity))
    
    # Sort by intensity (darkest first)
    sorted_chars = np.array([[ch, intensity] for ch, intensity in sorted(intensity_list, key=lambda x: x[1], reverse=True)]).T
    return sorted_chars

size = 10
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

result = intensity_map(usable, font_path, size)
#print(result[1])  # Print first 50 characters sorted by intensity