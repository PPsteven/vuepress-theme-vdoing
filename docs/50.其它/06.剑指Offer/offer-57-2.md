---
title: 面试题57. 和为s的两个数字 - II
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/1286ef/
---

## 题目描述

> 做题链接：[面试题57. 和为s的两个数字 - II](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

**序列内的数字由小到大排列**，不同序列按照首个数字从小到大排列。

<!--more-->

## 解题思路

**滑动窗口**

> 参考资料： [什么是滑动窗口，以及如何用滑动窗口解这道题（C++/Java/Python）](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/shi-yao-shi-hua-dong-chuang-kou-yi-ji-ru-he-yong-h/)

- 数据段的和小于target：右端右移
- 数据段的和大于target：左端右移
- 数据段的和等于target:   加入结果，并且左端右移

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200713024652.png" style="zoom: 33%;" />

## 代码

```python
class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        i, j = 1, 1
        sum, res = 1, []
        while i <= target // 2:
            if sum < target: # 右边界向右移动
                j += 1
                sum += j
            elif sum > target: # 左边界向右移动
                sum -= i
                i += 1
            else:
                res.append(list(range(i, j + 1))) # 记录结果
                sum -= i  # 左边界向右移动 
                i += 1
        return res 
```
