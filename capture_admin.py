import subprocess
import os

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
html_path = r'D:\AK-Proyecto\cic-store\index.html'
out_admin = r'D:\AK-Proyecto\cic-store\screenshot_admin.png'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

admin_content = content.replace('class="admin-view-container"', 'class="admin-view-container active"').replace('<main id="store-view-wrapper">', '<main id="store-view-wrapper" style="display:none;">')
temp_admin_html = r'D:\AK-Proyecto\cic-store\temp_admin.html'

with open(temp_admin_html, 'w', encoding='utf-8') as f:
    f.write(admin_content)

subprocess.run([chrome, '--headless', f'--screenshot={out_admin}', '--window-size=1440,1100', f'file:///{temp_admin_html}'], capture_output=True)

if os.path.exists(temp_admin_html):
    os.remove(temp_admin_html)

print("Admin screenshot generated successfully.")
