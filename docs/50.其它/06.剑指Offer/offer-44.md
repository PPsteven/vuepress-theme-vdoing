---
title: 剑指 Offer 44. 数字序列中某一位的数字
date: 2020-08-17 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/fc6e38/
---

## 题目描述

> 做题链接：[剑指 Offer 44. 数字序列中某一位的数字](https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/)

<!--more-->

## 解题思路

首先，我们要确定，要找的数字是几位数，数字有如下规律：

| 数字    | 位数 | 个数              |
| ------- | ---- | ----------------- |
| 1~9     | 1    | 10 - 1            |
| 10~99   | 2    | 100 - 10          |
| 100~999 | 3    | 1000 - 100        |
|         | k    | $10^k - 10^{k-1}$ |

 根据输入的 n 可以很容易的确定位数，举例 n = 200 

| 数字 | 位数 | 个数                      |
| ---- | ---- | ------------------------- |
| 200  | 1    | 200 - (10 - 1) * 1 = 191  |
| 191  | 2    | 191 - (100 - 10) * 2 = 11 |
| 11   | 3    | 11 - (1000 - 100) * 3 < 0 |

所以，位数为 3 位， 由 11 / 3 = 3 .. 2, 所以是第三位（从100开始）的第 4 个，而且是位于第1位。
所以，处于的数字为 100 + 4 - 1 = 103，第二个元素为 0 

## 代码

```python
class Solution:
    def findNthDigit(self, n: int) -> int:
        digit  = 0
        temp = 0
        while n - temp > 0:
            n = n - temp 
            digit += 1
            temp = (10 ** (digit) - 10 ** (digit - 1)) * digit
    
        a, b = n // digit, n % digit
        cur = 10 ** (digit - 1) + a - 1 + (1 if b > 0 else 0)
        return int(str(cur)[b - 1])
```

