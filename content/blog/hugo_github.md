---
title: "Personal website using Hugo & GitHub Pages"
date: 2025-01-26
tags: ["hugo", "githubpages"]
categories: ["engineer"]
description: "This blog is for people who would like to use Hugo template to build personal website instead of for those who would like to build their own Hugo template. Thus, the blog would not cover too much of Go. Rather, the focus is on understanding the routing logic."
draft: false
---
## 01 Why Hugo & GitHub Pages

I used Hugo simply because the template of Hugo is prettier compared to that of Jekyll. GitHub pages is a great option for hosting static websites because it's free and easy to use.

## 02 Pre-build

It is suggested to watch the playlist before you start using the Hugo template: <br>
[Hugo - Static Site Generator | Tutorial](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)

Though the playlist is a bit old, most of the steps are still applicable, especially for roughly understanding the Hugo framework. 

## 03 Build 
To understand why the steps are in this sequence, we need to understand the process of how hugo build the website. For detailed please refer to this [ChatGPT conversation](https://chatgpt.com/share/679b7643-3430-8000-af10-14845f39f91f)

For those who are not familiar with Hugo template (people like me), it is not suggested to change the file structure system directly. Following steps are presented to create a personal website quickly and gradually learn the Hugo framework along the way. 

### **1. Edit the Configuration File**
```
Location: root/config.yaml
Content: baseURL: https://GITHUB_NAME.github.io/REPO_NAME
```

Locate the main configuration file (config.toml, _config.yml, or similar).
Update the baseURL or the routing settings for the blog. As I am using GitHub pages, the baseURL is set to `https://GITHUB_NAME.github.io/REPO_NAME`.


### **2. Edit Frontmatter and content in Markdown Files**
```
Location: content/_index.md (and other .md)
Content: FrontMatter & .md content
```
Start with `_index.md.` to edit the FrontMatter. Having said that Hugo is a easy way of building the website, the only thing that a user should do is to edit .md file. After running the `hugo` command, the .index would be generated other required files automatically even for `tags` and `categories`, making Hugo template a good option for bloggers who knows little about Hugo.

### **3. Build the Website**
```
Location: TERMINAL
Content: bash commands 
```

`hugo`: Build the website.
`hugo -v`: Shows verbose output (detailed logs).
`hugo --help`: Shows available commands and options.
`hugo --minify`: Minifies the generated HTML and assets.
`hugo -D`: Includes drafts in the build.
`hugo server`: Start a local server listening to the changes.

### **4. Change File Names**
```
Location: content/
Content: FILE_NAME 
```
User can directly **change the file name** without thinking about how to refer to the new route. Hugo does all the things for you. 

### **5. Change Blog Layout**
```
Location: 
layouts/_default/list.html
layouts/_default/single.html
Content: FILE_NAME 
```
The layout files are located in the `layouts` directory. You can customize the layout by editing these files. For example, you can change the layout of the blog list page in `layouts/_default/list.html`. And for each individual blog, the layout is defined in `layouts/_default/single.html`. 


