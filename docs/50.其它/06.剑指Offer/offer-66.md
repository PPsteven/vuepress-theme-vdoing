---
title: 面试题66. 构建乘积数组
date: 2020-08-20 18:19:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/6cbeb6/
---

## 题目描述

> 做题链接：[面试题66. 构建乘积数组](https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/)

给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。**不能使用除法。**



<!--more-->

## 解题思路

使用乘法的思路很简单，求一个所有元素的乘积，然后依次除以对应元上的元素即可。如：

```
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
等于 [120/1, 120/2, 120/3, 120/4, 120/5]
```

如果不这样做的话，我们可以发现，第i个B的元素，实际上是由 [0: i - 1] 和 [i + 1:] 两个范围内的元素相乘所得。

所以，我们可以直接生成 left，right 两个数组，分别记录从左到i，从右到i元素乘积。

## 代码

```python
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        l = [1] * len(a)
        r = [1] * len(a)
        for i in range(1, len(a)):  # 左边乘积矩阵
            l[i] = l[i - 1] * a[i - 1]
        for i in range(len(a) - 2, -1, -1): # 右边乘积矩阵
            r[i] = r[i + 1] * a[i + 1]
        res = []
        for i in range(len(a)):
            res.append(l[i] * r[i])
        return res
```

