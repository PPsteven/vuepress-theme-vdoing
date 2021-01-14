---
title: 面试题31. 栈的压入、弹出序列
date: 2020-08-16 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/d14b96/
---

## 题目描述

> 做题链接：[面试题31. 栈的压入、弹出序列](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)
>

<!--more-->

## 解题思路

由于题目中假定了两个队列长度相等，栈内元素不同。这一假设大大简化了问题的复杂程度。

直接采用模拟的方法，在压入栈的同时，判断是否和弹出的元素一样，如果是一样，就直接弹出即可。

## 代码

```python
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        pushList = []
        for each in pushed:
            pushList.append(each)
            while pushList and pushList[-1] == popped[0]:  # 判断是否和弹出的元素一样
                popped = popped[1:]
                pushList.pop()  # 如果是一样，就直接弹出即可 
        return not popped  # 最后看看有没有完全弹出干净来判断
```
