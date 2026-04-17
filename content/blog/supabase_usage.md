---
title: "Decision Tree implementation "
date: 2026-03-29
tags: ["algorithm"]
categories: ["learn"]
description: "This blog is for those who want to learn about how to create decision trees from scratch without using AI to tran your brain."
draft: true
---

## 01 Decision Tree Decision Logic & Entropy

### A good classification decision should make pure splits? 
First of all, decision tree is a type of binary tree with decision nodes that could classify data into "left" and "right" branches. The quesiton arise "What makes a good classification decision node?" 

Let's have an initutive before getting into the math. Think of an example of [29+, 35-], meaning that we have 29 positive samples and 35 negative samples. We can split data into following extreme cases: 

- Split 1: [29+, 0-] and [0+, 35-]
- Split 2: [15+, 17-] and [14+, 18-]

Considering that a good decision node should be able to "separate" negative and positive samples, we can see that Split 1 is better than Split 2. Thus, compare to Split 1, Split 2 is more impure, indicating that the "Entropy" is higher. 


### Entropy is defined using log2 and weight? 
"Entropy" was defined by Claude Shannon in 1948, which is a measure of the impurity of a set. The formula for entropy is: 
$$
Entropy = -p_+ \log_2 p_+ - p_- \log_2 p_-
$$


Please refer to page 7 for function definition: https://www.cs.cmu.edu/afs/cs/project/theo-20/www/mlbook/ch3.pdf 

## 02 Entropy and Information Gain
According to the above example, a good classification decision should have a low entropy. But in a decision tree, we have children nodes and parents nodes. How should we measure "how good is the decision node compared to other decision nodes"? 

We can learn the most from the deicision node if:  
- When parent node has high entropy 
- Children nodes have lower entropy after the split 

That is, we are gaining more information from the decision node. Thus, we can define "Information Gain" as the difference between the entropy of parent node and the weighted average of the entropy of children nodes.



