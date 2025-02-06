---
title: "PyTorch Journey - Background"
date: 2025-02-06
tags: ["pytorch"]
categories: ["design"]
description: "This blog is for those who want to learn PyTorch from scratch. This PyTorch series covers an introduction to PyTorch, its applications, and some popular libraries."
draft: false
---

## 01 Introduction

For some people, understanding the development history of a technology may not be important. However, personally, I find it difficult to absorb knowledge without knowing at least part of its background. If you're the type of person who prefers to skip the history and jump straight into practical applications, feel free to skip this page and dive directly into the technical content.

## 02 History

In this section, I will introduce the history of PyTorch through its version updates, which I believe is the best way to illustrate its evolution and improvements.

### **PyTorch 0.1**
**Naming:**

PyTorch is a combination of **Python** and **Torch**. The latter is a machine learning library originally written in Lua. Although [Lua](https://zh.wikipedia.org/zh-tw/Lua) may not be widely recognized, it is a scripting language particularly popular in game development. Two well-known applications that use Lua are Redis and Wireshark.

PyTorch was developed to address the slow computation times in AI research, where experiments often took a long time to produce results. For a detailed development history, please refer to external references, as I will focus on summarizing its key aspects rather than repeating information.


**Pros:**
1. **Pythonic User Interface** - Easy to understand and use.
2. **Torch Tensor Operations** - Supports GPU-based tensor operations, significantly improving computational speed.
3. **Dynamic Computation Graph** - Enables flexible model building ([Static vs. Dynamic Graph](https://chatgpt.com/share/67a48beb-49c4-8000-b35b-4bb0e9fd070b)).

**Cons:**
1. Primarily research-oriented rather than optimized for industrial production.

### **PyTorch 1.0**
**Background**
At the time, PyTorch's main competitor was TensorFlow, which was developed by Google and widely adopted by the industry. To bridge the gap and enhance its adoption, PyTorch focused on improving key areas.

Two major challenges prevented PyTorch from being widely used in industry:
- **Environment Compatibility:** Some applications did not support Python, making scripting languages preferable over full-fledged programming languages.
- **Handling Large Datasets:** While research often focuses on smaller datasets, industrial applications require efficient handling of large datasets.

**Features:**
1. **TorchScript** (Addresses the environment compatibility issue)
   - Introduces scripting capabilities that allow PyTorch models to be deployed in environments like Android using plugins.
2. **Integration with [Caffe2](https://caffe2.ai/docs/caffe-migration.html#null__how-is-caffe2-different-from-pytorch)** (Addresses the large dataset issue)
   - Caffe2 is a framework designed for large-scale deployment.

### **PyTorch 1.X**
**Background**
As the PyTorch ecosystem grew, the next step was expanding its open-source capabilities. To achieve this, several issues needed to be addressed.

**Features:**
- **ONNX (Open Neural Network Exchange)**
  - Facilitates sharing and deploying models across different frameworks.
- **Model Quantization Libraries**
  - Enables model size reduction (e.g., converting floating-point values to integers) for efficient deployment on mobile and edge devices.
- **Multimodal Capabilities**
  - Expands PyTorch's applicability across different domains, including computer vision (*torchvision*), natural language processing (*torchtext*), and audio processing (*torchaudio*).

### **PyTorch 2.0**
As new hardware such as TPUs and custom AI chips emerged, integrating PyTorch with specialized ASICs became a major challenge for developers.

That's all for today. If you're interested in comparing TensorFlow and PyTorch to determine which is a better choice, check out [PyTorch for Beginners | Introduction to PyTorch | Video 1 | CampusX](https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7&index=1) at timestamp **30:45**.

## References:
1. [Practical Deep Learning using PyTorch](https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7&index=1)
2. [Wiki PyTorch](https://golden.com/wiki/PyTorch-NMGD4Y4#References)
