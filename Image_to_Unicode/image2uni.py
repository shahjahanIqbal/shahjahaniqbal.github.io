#Converting an Image to a Unicode Art
#25-06-2025

import matplotlib.pyplot as plt
import numpy as np
import cv2
from Map_Unicode_to_Intensity import result 
from PIL import Image, ImageDraw, ImageFont

filepath = '/home/shahjahan/Desktop/Personal website/Image_to_Unicode/me4.jpeg'
image = cv2.imread(filepath)
image = cv2.resize(image, (1500,1500))
# If image needs rotation

#image = cv2.rotate(cv2.imread(filepath), cv2.ROTATE_360_COUNTERCLOCKWISE)

# Convert to grayscale and run a Gaussian Blur to smooth the edges, adjust parameters accordingly for each image

gray_image = cv2.GaussianBlur(cv2.cvtColor(image, cv2.COLOR_BGR2GRAY), (5,5), 1, 1)

# Bin the image to reduce resolution

bin_factor = 4
H, W = np.shape(gray_image)
h_new = H // bin_factor
w_new = W // bin_factor

img_cropped = gray_image[:h_new * bin_factor, : w_new*bin_factor]

binned_image = img_cropped.reshape(h_new, bin_factor, w_new, bin_factor).mean(axis=(1,3)).astype(np.uint8)



# Store intensities and corresponding unicodes in separate arrays 
intensities = np.array(result[1], dtype=float) 
uni = np.array(result[0])
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

#cv2.imshow('Grayscale', gray_image)
#cv2.waitKey(0)  

# Compares intensity of each pixel in the grayscale image and gets the closest matching unicode character. 
# Stores the unicode in a 2D array of matching dimensions to the original image

uni_image = np.empty(binned_image.shape, dtype=str)
for i, val in np.ndenumerate(binned_image):
    int_ind = np.argmin(np.abs(val - intensities))
    uni_image[i[0], i[1]] = uni[int_ind]

# Draws the unicode character in a PIL canvas 

def draw_unicode_image(uni_image, font_path, font_size=10, height_correction=0.55):
    h, w = uni_image.shape
    font = ImageFont.truetype(font_path, font_size)

    # CORRECTED canvas height
    canvas = Image.new('L', (w * font_size, int(h * font_size * height_correction)), color=0)
    draw = ImageDraw.Draw(canvas)

    for y in range(h):
        for x in range(w):
            draw.text(
                (x * font_size, int(y * font_size * height_correction)), 
                uni_image[y, x], 
                font=font, 
                fill=255
            )

    return canvas
    #print(i)
#print(intensities)
canvas = draw_unicode_image(uni_image, font_path, font_size=10, height_correction=0.55)
canvas.show()

with open("Ascii4.txt", "w", encoding="utf-8") as f:
    for i, row in enumerate(uni_image):
        if i % 2 == 0:  # Keep every 2nd row to flatten vertical stretch
            f.write("".join(row) + "\n")