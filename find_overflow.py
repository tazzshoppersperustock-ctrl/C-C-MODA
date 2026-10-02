import subprocess
import json

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
html_path = r'D:\AK-Proyecto\cic-store\index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

script = """
<script>
window.onload = function() {
  var culprits = [];
  var all = document.body.querySelectorAll('*');
  for (var i = 0; i < all.length; i++) {
    var el = all[i];
    if (el.scrollWidth > 375 && el.children.length === 0) {
      culprits.push({tag: el.tagName, cls: el.className, id: el.id, sw: el.scrollWidth});
    }
  }
  document.title = 'CULPRITS:' + JSON.stringify(culprits);
};
</script>
"""

temp_file = r'D:\AK-Proyecto\cic-store\temp_test_overflow2.html'
with open(temp_file, 'w', encoding='utf-8') as f:
    f.write(html.replace('</body>', script + '</body>'))

cmd = [chrome, '--headless', '--dump-dom', '--window-size=375,812', f'file:///{temp_file}']
res = subprocess.run(cmd, capture_output=True, errors='replace')

import os
if os.path.exists(temp_file): os.remove(temp_file)

for line in res.stdout.split('\n'):
    if '<title>CULPRITS:' in line:
        print(line.encode('ascii', errors='replace').decode())
