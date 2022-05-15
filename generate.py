import json, shutil, os
from jinja2 import Environment, FileSystemLoader

def categorize_entries(all, topics):
  category_all = {
    "name": "The Full List",
    "entries": all
  }
  entries = []
  entries.append(category_all)

  for topic in topics:
    topic_list = []
    for entry in all:
      if topic['name'] in entry['topics']: topic_list.append(entry)
    entries.append({
      "name": topic['name'],
      "entries": topic_list
    })

  return entries

f = open("data.json", "r")
data = json.load(f)
f.close()

shutil.rmtree('public')
os.mkdir('public')

entries = categorize_entries(data['entries'], data['topics'])

file_loader = FileSystemLoader('src/templates')
env = Environment(loader=file_loader)
env.trim_blocks = True
env.lstrip_blocks = True
env.rstrip_blocks = True

template = env.get_template('index.html.jinja2')
content = template.render(entries=entries, topics=data['topics'])

o = open("public/index.html", "w")

o.write(content)
o.close()

# Append CSS
n = open("src/css/normalize.css")
normalized_css = n.read()
n.close()
c = open("src/css/rpggen.css")
app_css = c.read()

full_css = normalized_css + app_css

o = open("public/rpggen.css", "w")
o.write(full_css)
o.close()

# Copy files

shutil.copytree('src/images', 'public/images')
shutil.copyfile('src/favicon.ico', 'public/favicon.ico')
shutil.copyfile('src/browserconfig.xml', 'public/browserconfig.xml')
shutil.copyfile('src/manifest.json', 'public/manifest.json')
