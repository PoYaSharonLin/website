# Website 


## About 
A static site showcasing blogs and projects, generated with Hugo and hosted via GitHub Pages.

Demo: https://poyasharonlin.github.io/website/



## Directory Structure

This repository follows the standard Hugo directory structure:

- `content/`: Contains the markdown source files for your posts and pages.
- `layouts/`: Contains HTML templates that define the site's structure.
- `static/`: Stores static assets (images, CSS, JS, icons) that are copied directly to the build output.
- `assets/`: Contains assets that are processed by Hugo Pipes.
- `config.yaml`: The main configuration file for the site.

## How to add blog post

### 01 Add a new markdown 

```bash
cd content/blog 
hugo new blog/FILE_NAME.md
```
### 02 Preview the blog post 
```bash
hugo server -D
```

Please note that the changes will take several minutes to reflect on github server. 

---

## How to run it on your own machine

### 01 Setup virtual environment
```bash
brew install hugo  # macOS
sudo apt-get install hugo  # Ubuntu/Debian
```
Validation 
```bash
hugo version
```

### 02 Clone the Repository
```bash
git clone https://github.com/PoYaSharonLin/website.git
cd website
```

### 03 Install themes 
```bash
git submodule update --init --recursive
```

### 04 Run the Development Server
```bash
hugo server -D
```

### 05 Build static Website
```bash
hugo
```

- Output is in the public/ folder.
- Check public/blog/ for your new post's HTML.

### 05 Deploy to Github pages 
Follow the steps in the official Hugo guide: [Host on GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/).

### Notes 
- This README assumes a standard Hugo setup with GitHub Actions for deployment, as indicated by your issue. If you’re using a specific theme (e.g., PaperMod, Ananke), you may need to add theme-specific setup steps (e.g., theme = "your-theme-name" in config.toml).

- If your workflow or setup differs (e.g., deploying to a `gh-pages` branch instead of GitHub Actions), visit: 

```bash
.github/workflows/hugo.yaml
```

and change branches to your desired branch 
```yaml
on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - pages_v1
``` 

