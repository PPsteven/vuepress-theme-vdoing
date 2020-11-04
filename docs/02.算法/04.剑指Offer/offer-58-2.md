---
title: 面试题58 - II. 左旋转字符串
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/b107b2/
---

## 题目描述

> 做题链接：[面试题58 - II. 左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

<!--more-->

## 解题思路&代码

方法一，三都需要额外的空间，方法二是原地翻转，故应是本题最佳解法

### 方法一：遍历版

用一个指针指向  `s` ，如果不停的右移，到底后从头开始循环。一遍循环一遍用新的空字符'ret' 记录

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        ret, size = "", len(s)
        i = n % size
        for _ in range(len(s)):
            ret += s[i]
            i = (i + 1) % size
        return ret
```



### 方法二：三次翻转

对于 `C++` 来说，一个比较推荐的解题思路是 通过三次翻转的方式去解决。

如 abcdef， k =2，通过如下三步可以完成翻转

1. 将前k 个元素翻转，即 ab => ba
2. 将后n-k 个元素翻转，即 cdef => fedc
3. 整体翻转 bafedc => cdefab 

> 时间复制度 $O(N)$， 空间复杂度 O(1)

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        def reverse(s, i, j):
           while i < j: 
               s[i], s[j] = s[j], s[i]
               i += 1
               j -= 1
        s = list(s)
        reverse(s, 0, n - 1)
        reverse(s, n, len(s) - 1)
        reverse(s, 0, len(s) - 1)
        return ''.join(s)
```

### 方法三：Python 字符切片法

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        n = n % len(s)
        return s[n:] + s[:n] 
```

