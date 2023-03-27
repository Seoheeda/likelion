#!/usr/bin/env python
# coding: utf-8

# In[1]:


num = int(input())
for i in range(0, num):
    print(" " * (num - i - 1), "*" * (i + 1))

