---
title: 面试题58 - I. 翻转单词顺序
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/74cbb3/
---

## 题目描述

> 做题链接：[面试题58 - I. 翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

<!--more-->

## 解题思路

考点是字符串，但是python操作字符串比较简单，失去了考察的价值。C++操作就有考察价值。

## 代码

> 代码一：从右向左查找，一旦找到空格，就把单词标记，最后拼接输出

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        i = j = len(s) - 1
        res = []
        while i >= 0:
            while i >= 0 and s[i] != " ": i -= 1
            res.append(s[i + 1: j + 1])
            while i >= 0 and s[i] == " ": i -= 1
            j = i 
        return ' '.join(res)
```



> 代码二：python极简版

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join([_ for _ in s.split(' ')[::-1] if _])
```

