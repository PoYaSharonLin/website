---
title: "Personal website using Hugo & GitHub Pages"
date: 2025-01-26
tags: ["hugo", "githubpages"]
categories: ["application"]
description: "n/a"
draft: false
---
This blog is for people who would like to use Hugo template to build personal website instead of for those who would like to build their own Hugo template. Thus, the blog would not cover too much of Go. Rather, the focus is on understanding the routing logic.

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

`hugo`: Build the website.
`hugo -v`: Shows verbose output (detailed logs).
`hugo --help`: Shows available commands and options.
`hugo --minify`: Minifies the generated HTML and assets.
`hugo -D`: Includes drafts in the build.
`hugo server`: Start a local server listening to the changes.


If the routing requires changes to templates, edit the relevant HTML files:





layouts/_default/list.html for the blog list.



layouts/_default/single.html for individual posts.



Adjust links and references to match the new routes.

6. Rebuild the Website





Run the appropriate command to regenerate the site:





Hugo: hugo



Jekyll: jekyll build



This ensures the new routes take effect.

7. Test the Changes





Preview the site locally:





Hugo: hugo server



Jekyll: bundle exec jekyll serve



Check the routing paths to ensure they work correctly.

8. Deploy the Changes





Push the updated files to your hosting platform (e.g., GitHub Pages, Netlify).

Let me know if you can share details about the framework you're using, and I can provide more tailored instructions.
