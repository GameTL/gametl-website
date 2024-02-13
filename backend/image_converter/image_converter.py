import os
from PIL import Image

def convert_images(input_dir, output_dir, format='webp', quality=80, max_width=None, max_height=None):
    """
    Converts images in a directory to WebP or AVIF format.

    Args:
        input_dir (str): Path to the input directory containing images.
        output_dir (str): Path to the output directory for converted images.
        format (str, optional): Target format ('webp' or 'avif'). Defaults to 'webp'.
        quality (int, optional): Quality setting for compression (0-100). Defaults to 80.
        max_width (int, optional): Maximum width for resizing. Defaults to None (no resizing).
        max_height (int, optional): Maximum height for resizing. Defaults to None (no resizing).
    """

    if format not in ('webp', 'avif'):
        raise ValueError("Invalid format. Choose 'webp' or 'avif'.")

    os.makedirs(output_dir, exist_ok=True)  # Create the output directory if it doesn't exist

    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(input_dir, filename)
            img = Image.open(filepath)

            # Resize if necessary
            if max_width or max_height:
                img.thumbnail((max_width, max_height))

            # Convert to the desired format
            new_filename = os.path.splitext(filename)[0] + '.' + format
            output_path = os.path.join(output_dir, new_filename)

            if format == 'webp':
                img.save(output_path, 'webp', quality=quality)
            elif format == 'avif':
                # Requires Pillow compiled with AVIF support
                img.save(output_path, 'avif', quality=quality)
        print(f"Finished converting {filename} to {format} format.")

if __name__ == "__main__":
    input_dir = os.path.dirname(os.path.realpath(__file__)) + '/img_in'
    output_dir = os.path.dirname(os.path.realpath(__file__)) + '/img_out'
    image_format = 'webp'  # Use 'webp' or 'avif'
    quality = 65
    max_width = 1000  # Set to None if you don't want resizing
    max_height = 1000  # Set to None if you don't want resizing

    convert_images(input_dir, output_dir, image_format, quality, max_width, max_height)
