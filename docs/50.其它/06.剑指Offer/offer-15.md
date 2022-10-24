---
title: 面试题15-二进制中的1
date: 2020-08-13 15:53:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/5c9798/
---

## 题目描述

> 做题链接：[面试题15-二进制中的1](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)
>

统计二进制中1的个数

<!--more-->

## 解题思路

二进制位运算

### 方法一：逐位计算

> 时间复杂度 $O(log_2n)$ 空间复杂度 $O(1)$

### 方法二：使用 `n & (n - 1)` 技巧

- 解题思路：技巧： `n & (n - 1)`

  - $(n - 1)$ 二进制最右边的 1变成0，0变成1
  - $n\times(n - 1)$ 二进制最右边的 1 变成 0，其余保持不变 。每一次 $n\times(n - 1)$都会消去一个0，直到消完为止。

  > 时间复杂度 $O(M),M 代表数字N中1的个数$ 空间复杂度: $O(1)$

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200704162344.png" style="zoom: 50%;" />

### 

## 代码

> 【无符号位】【逐位判断】

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += n & 1
            n >>= 1
        return res
```



> 【有符号位】【逐位判断】

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        if n < 0:
            n = n & 0xffffffff
        while n:
            res += n & 1
            n >>= 1
        return res
```



> 使用 n &  (n - 1) 

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += 1
            n &= n - 1
        return res
```

