---
title: 面试题49. 丑数
date: 2020-08-20 18:16:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/5a2115/
---

## 题目描述

> 做题链接：[面试题49. 丑数](https://leetcode-cn.com/problems/chou-shu-lcof/)

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

<!--more-->

## 解题思路&代码

p1, p2, p3 是作为 2，3，5 的指针。每次是从 0 的位置开始向右走。

> 参考教程：[这个教程](https://leetcode-cn.com/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/)

## 代码

```python
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        dp = [1] * n
        p1, p2, p3 = 0, 0, 0
        for i in range(1, n):
            dp[i] = min(dp[p1] * 2, dp[p2] * 3, dp[p3] * 5)
            if dp[i] == dp[p1] * 2: p1 += 1
            if dp[i] == dp[p2] * 3: p2 += 1
            if dp[i] == dp[p3] * 5: p3 += 1
        print(dp)
        return dp[-1]
```
