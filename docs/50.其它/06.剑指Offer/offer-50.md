---
title: 面试题50. 第一个只出现一次的字符
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/237532/
---

## 题目描述

> 做题链接：[面试题50. 第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

<!--more-->

## 解题思路

哈希表实现

Python 实现哈希表的方式有两种，一种使用 `集合`，另一种是 `字典`

## 代码

```python
class Solution:
    def firstUniqChar(self, s: str) -> str:
        letter = {}
        for char in s:
            if char in letter:
                letter[char] += 1
            else:
                letter[char] = 1
        for k, v in letter.items():
            if v == 1:
                return k
        return " "
```
