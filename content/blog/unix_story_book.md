---
title: "Linux Tutorial for Beginners - Story Book Version"
date: 2025-09-02
tags: ["UNIX", "OS"]
categories: ["engineering"]
description: "This blog is for those who are not familiar with Linux/UNIX. This tutorial serves as a story book providing visualizations to read along with the original resources: https://linuxtut.netlify.app/ "
draft: false
---

##  UNIX Introduction
Reference: https://linuxtut.netlify.app/unixintro 

### The UNIX operating system 
In the article, the author says that *"The UNIX operating system is made up of three parts; the kernel, the shell and the programs."*. Personally, I would like to add users to it. 


- Login 
The flowchart below illustrates the process of a user logging into a UNIX system. The kernel verifies the username and password. If the credentials are correct, the user can start a program, which typically opens a shell. If the credentials are incorrect, it returns an error message indicating failed authentication.

```
flowchart TD
    A[Users] -->|Log in| B[Kernel]
    B --> C{authorized Username&PWD?}
    C -->|Yes| D[Program]
    D --> |Start| E[shell]
    C -->|No| F[Error Message: Failed Authentication]
```

- Shell starts 
After logging in, the users can start to enter commands to the shell. The flowchart below illustrates the process of a user entering a command `rm myfile` to the shell. The shell checks if the file `myfile` exists. If it does, the shell starts the corresponding program, `rm`. If not, it returns an error message indicating that the file does not exist.

```
flowchart TD
    A[Users] -->|rm myfile| B[Shell]
    B --> C{myfile exists?}
    C -->|Yes| D[Program]
    D --> |Start| E[rm]
    C -->|No| F[Error Message: No such file or directory]
```

🤔 Can we interact with the Kernal without shell? 
Yes, shell is an interface. You can bipass interface but having an interface will make your life easier.

Scenario: 
Doing `ls` with or withour shell

- With shell: 
```bash
ls
```

- Without shell: 
```c
#include <unistd.h>
int main() {
    char *args[] = {"/bin/ls", NULL};
    execve("/bin/ls", args, NULL);
    return 0;
}
```

### Files and Processes
PID is process ID, which we often use to kill the process. 

Use `SIGTERM` to terminate the process 
```bash
kill <PID>
```

Use `SIGKILL` to forcefully terminate the process
```bash
kill -9 <PID>
```

### The Directory Structure
According to what we knew from **The UNIX operating system**, each session is created once a user logins. What about the difference between `su`(substitute) and `sudo`(superuser do) then? 

To compare it and see the difference, just go enter the prompt and find it out. 

### Starting Xterminal session 
Nothing more to add 

## Linux Tutorial One 
`% ls ~` lists all the files in the home directory. 
`% ls ~/..` lists all the files in the parent directory of the home directory 

## Linux Tutorial Two 
`grep -i` is an useful command to search to ignore case sensitivity

## Linux Tutorial Three 



