import urllib.request
import os

replacements = {
    # Authentic clean flatlay and model images of apparel
    "polo_negro_pima_front.jpg": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", # Black t-shirt flat lay
    "polo_blanco_oversize.jpg": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", # Crisp white t-shirt
    "polera_hoodie_arena.jpg": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80", # Clean hoodie
    "polera_hoodie_antracita.jpg": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80", # Gray/Anthracite hoodie
    "pantalon_cargo_heavy.jpg": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80", # Cargo pants / utility
    "pantalon_parachute_negro.jpg": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80" # Streetwear pants
}

dest_dir = r"D:\AK-Proyecto\cic-store\assets\images"
headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in replacements.items():
    path = os.path.join(dest_dir, name)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            with open(path, "wb") as f:
                f.write(resp.read())
        print(f"Replaced {name} successfully.")
    except Exception as e:
        print(f"Error {name}: {e}")
