---
title: "LangChain Journey - Model"
date: 2025-02-09
tags: ["langchain"]
categories: ["design"]
description: "This blog is for those who want to learn LangChain from scratch. This LangChain series covers an introduction to LangChain, its applications, and some popular libraries."
draft: false
---

## 01 What is LangChain? 
LangChain is a framework for **LLM application development** (resource: [langchain](https://github.com/langchain-ai/langchain)). That is to say, if you want to learn the framework to train LLM, refer to PyTorch. If you want to learn the framework to build LLM applications, refer to LangChain. 

You can simple refer to the [conceptual guide and high level](https://python.langchain.com/docs/concepts/) from langchain officials as well. 


## 02 Core Components of LangChain 
The core components of LangChain library include
1. Model 
2. Prompt 
3. Data connection
4. Memory 
5. Chain
6. Agent
7. Callback

Even though most of the people prefer to use a bottom-up method and muscle memory, personally I prefer learning in top-down. Hence, I'll spend a bit time explaining how i connect all the concept together and how it helps me if I want to develop a application. 

First, component 1 to 4 focus on the base of the application. When we would like to develop an app, we would have to know which and what kind of model that we would like to use. For instance, NoteBookLM would definitely prefer a LLM model other than chat model. However, for an edge device, having an chat model would be more than enough. Thus, we start with model. After knowing which model to chose, we would definitely want to know how to make the model respond the right thing (as this concept is honestly pretty obvious, i'll skip the explanation here). The third part is data connection, what for? To do a better job in Natural Language Understanding. Data connection basically means integrating multiple data source and use different ways to output the stored data. Now, the next step is memory. Larger memory leads to more information, hierarchical memory representing faster processing speed. 

Component 5 to 7 focus more on automation. Chain is a library to benefit some data connection operations that are often be used, such as Transform Chain (for data transformation), SQL Chain (for retrieving data from DB), and more. Agent is a library which you can imagine as "scripts", something like Google App Script that helps you in automatically connecting the chains to perform a job. Lastly, evaluation, the most vital component of all. 

## 03 Model Types  

Following is a table that summarizes the difference between LLM models and chat models. Simply put, for one-time task, choose LLMs. For multi-round conversations, choose chat models. 
| Feature               | LLMs (Text Models)                                       | Chat Models                                         |
|----------------------|--------------------------------------------------|--------------------------------------------------|
| **Input Format**     | Plain text prompt                                | Structured messages (`system`, `user`, `assistant`) |
| **Context Awareness** | No built-in memory (stateless)                   | Retains conversation history                      |
| **Use Case**         | Standalone text tasks (summarization, text completion) | Multi-turn conversations, chatbots               |
| **Example Models**   | `text-davinci-003`, `LLaMA`, `GPT-NeoX`           | `gpt-4`, `Claude`, `Gemini`, `Mistral-Instruct`  |
| **Instruction Handling** | Requires explicit formatting                   | Optimized for following instructions             |
| **Response Style**   | May require prompt engineering for structured responses | Naturally structured as dialogue   |  

LangChain covers a wide range of models such as code models, document loaders, multi-modal models aside from the 3 promenent models that we are going to introduce below. For the API reference of the language model, simple refer to [Langchain API Language Models](https://python.langchain.com/api_reference/core/language_models.html#langchain-core-language-models)

#### LLM models 
In the API reference from LangChain, you can see that LLM models are generally **older models** that perform a single task such as pdf summarization or text completion. 

To create your own custom LLM class, refer to [How to create a custom LLM class](https://python.langchain.com/docs/how_to/custom_llm/)

#### Chat models 
Chat models in LangChain is more likely to be the one that the most applications are using. 

To create your own custom chat models, refer to [Custom Chat Model](https://python.langchain.com/v0.1/docs/modules/model_io/chat/custom_chat_model/)

## 04 Embedding models 
[Word enbedding](https://en.wikipedia.org/wiki/Word_embedding) simply means representing words by vectors. The tech heads all have their own ways of doing word 2 vectors. 

To choose the embedding models from the tech heads (OpenAI, Azure, Google, NVDIA etc), refer to [Embedding models](https://python.langchain.com/docs/integrations/text_embedding/)

## 05 Model Caching 
Following is a summary table of the use case of each caching. As you can tell from this table, each of the cache type is taylored to a specific use. One should pick the desired cache type according to the main function of the application. 


| **Cache Type**   | **Use Case**                                   | **Real-World Application**                      |
|-----------------|---------------------------------------------|-----------------------------------|
| InMemoryCache  | Quick prototyping, local testing           | Temporary caching in ML model training pipelines to avoid redundant computation |
| SQLiteCache    | Lightweight persistent caching             | Caching user preferences in a mobile application to reduce database queries |
| RedisCache     | High-performance, distributed applications | Storing session data and user authentication tokens in large-scale web applications like e-commerce and social media platforms |
| GPTCache       | Optimized caching for LLM responses        | Caching AI-generated responses in customer support chatbots to enhance response time and reduce API costs |
| MomentoCache   | Serverless, scalable cloud applications    | Implementing ephemeral caching in microservices architecture to improve API response times without managing infrastructure |


To know what are the possible Cache classes, refer to [Cache classes: summary table](https://python.langchain.com/docs/integrations/llm_caching/#cache-classes-summary-table)

## 06 Model Config 
For application newbies(like me), configuration file means a file that has all the basic settings, just like the setting that you have in all the games so that you don't have do the set up of the keyboard short cut every time you log-in. (It's a terrible example example but i hope you get it.) 

For example of how model config file look like, refer to: 
[llm_config.yaml](https://github.com/stanford-oval/WikiChat/blob/main/llm_config.yaml)
or 
[lora_config.yaml](https://github.com/04RR/LLM-Trainer/blob/main/lora_config.yaml)


As I could not find an example of config file from LangChain, [Configuration Gudie](https://docs.nvidia.com/nemo/guardrails/user_guides/configuration-guide.html) from NVDIA also helps in understanding how should a config file look like when setting system prompts, custom actions (a file that writes down the workflow), configuring LLMs per task etc. 

## 07 Conclusion
In this blog, I mainly focus on explaining the high level concept of LangChain, listing components in LangChain, providing the links of the official documents related to the models in LangChain. 

