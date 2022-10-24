---
title: 面试题56 - I. 数组中数字出现的次数
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/cad8c0/
---

## 题目描述

> 做题链接：[面试题56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

<!--more-->

## 解题思路

### 方法一：哈希表

如果没有 空间复杂的限制，哈希表实现非常简单。

### 方法二：位运算（异或运算）

**异或用法:**
$$
\begin{aligned}
a \oplus b &= b \oplus a \\
a \oplus a &= 0 \\
(a \oplus b) \oplus c &= a \oplus (b \oplus c) \\
0 \oplus a &= a 
\end{aligned}
$$
对于 数组 $[1, 1, 2, 2, 3, 4]$ 第一步，利用 $a \oplus a = 0$ ，可以得到 
$$
1 \oplus 1 \oplus 2 \oplus 2 \oplus 3 \oplus 4 = 3 \oplus 4 \\
(011)_b \oplus (100)_b = (111)b = 7
$$
由于是找到两个不一致的数，所以只需要把 3，4 这两个不同的数分到两个不同的组中，如：

$[1, 1, 3]$， $[2, 2, 4]$ 。直接对组内元素进行 `互异(xor)` ，可得最后的结果 **3，4**

我们直接根据 $(111)_b$ 的任意个1去区分3，4，因为我们知道在该二进制位上，这两个元素一定是不同的。

## 代码

> 代码一：哈希表

```python
class Solution:
    def singleNumbers(self, nums: List[int]) -> List[int]:
        s = set()
        for i in nums:
            if i in s: 
                s.remove(i)
            else: 
                s.add(i)
        return list(s)
```

> 代码二：位运算（异或运算）

```python
class Solution:
    def singleNumbers(self, nums: List[int]) -> List[int]:
        a, b, xor_ret = 0, 0, 0
        for number in nums:
            xor_ret = xor_ret ^ number # 全部异或
        h = 1
        while (xor_ret & h == 0): # 从右向左找到第一个二进制为1的位置，并根据这位置去分组
            h = h << 1
        for number in nums:
            if number & h: a = a ^ number # 组内异或
            else: b = b ^ number
        return [a, b]
```

