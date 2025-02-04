---
title: "Personal Website Using Hugo & GitHub Pages"
date: 2025-01-30
tags: ["hugo", "githubpages"]
categories: ["engineering"]
description: "This blog is for those who want to build a personal website using a Hugo template rather than creating their own Hugo template from scratch. Therefore, this post will not delve deeply into Go but will focus on understanding the routing logic."
draft: false
---

## 01 Why Hugo & GitHub Pages?

I chose Hugo because its templates are more visually appealing compared to Jekyll's. GitHub Pages is an excellent hosting option for static websites since it is free and easy to use.

## 02 Pre-Build Preparation

Before using a Hugo template, I recommend watching this playlist:

[Hugo - Static Site Generator | Tutorial](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)

Although the playlist is somewhat outdated, most of the steps are still relevant, especially for getting a general understanding of the Hugo framework.

## 03 Building the Website

To understand the reasoning behind the following steps, it helps to be familiar with Hugo’s website-building process. For a detailed explanation, refer to this [ChatGPT conversation](https://chatgpt.com/share/679b7643-3430-8000-af10-14845f39f91f).

If you are not familiar with Hugo templates (like I was initially), I do not recommend modifying the file structure directly. Instead, follow these steps to quickly set up a personal website while gradually learning about the Hugo framework.

### **1. Edit the Configuration File**

```
Location: root/config.yaml
Content: baseURL: https://GITHUB_NAME.github.io/REPO_NAME
```

Locate the main configuration file (`config.toml`, `_config.yml`, or similar) and update the `baseURL` or routing settings. Since I am using GitHub Pages, the `baseURL` is set to:

```
https://GITHUB_NAME.github.io/REPO_NAME
```

### **2. Edit Frontmatter and Markdown Content**

```
Location: content/_index.md (and other .md files)
Content: FrontMatter & Markdown content
```

Start by editing `_index.md` to modify the frontmatter. One of Hugo’s strengths is its simplicity—users only need to edit Markdown (`.md`) files. After running the `hugo` command, Hugo automatically generates necessary files, including those for `tags` and `categories`. This makes Hugo an excellent choice for bloggers who are not deeply familiar with its inner workings.

### **3. Build the Website**

```
Location: TERMINAL
Content: Bash commands
```

- `hugo` – Builds the website.
- `hugo -v` – Displays verbose output (detailed logs).
- `hugo --help` – Shows available commands and options.
- `hugo --minify` – Minifies the generated HTML and assets.
- `hugo -D` – Includes draft posts in the build.
- `hugo server` – Starts a local development server that reflects changes in real time.

### **4. Rename Files**

```
Location: content/
Content: FILE_NAME
```

You can rename files directly without worrying about updating references—Hugo handles this automatically.

### **5. Customize the Blog Layout**

```
Location: 
layouts/_default/list.html
layouts/_default/single.html
Content: FILE_NAME
```

Layout files are stored in the `layouts` directory. You can customize the design by modifying these files. For instance:
- The blog list page layout is defined in `layouts/_default/list.html`.
- The layout for individual blog posts is defined in `layouts/_default/single.html`.

### **6. Deploy to GitHub Pages**

Follow the steps in the official Hugo guide: [Host on GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/).

GitHub offers two deployment methods:
1. **Deploy from a Branch**
2. **GitHub Actions**

Each method has its own advantages. 
- Deploying from a branch is suited for pre-built HTML files.
- For repositories using a static site generator (e.g., Hugo, Jekyll, Next.js), only a YAML file containing the GitHub workflow is needed.

## Conclusion

This is a brief and straightforward guide for those looking to set up a visually appealing personal website quickly. Many aspects remain unexplored, such as Hugo’s build process, how Go functions within Hugo, and the structure of the GitHub workflow YAML file. I will leave those topics for my future self to explore.
