---
title: 面试题57. 和为s的两个数字
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/77fb0b/
---

## 题目描述

> 做题链接：[面试题57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

输入一个**递增排序**的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

<!--more-->

## 解题思路

**滑动窗口**

LeetCode 第一题【Sum II】的变形，加上了 `递增数组` 的情况，本质上是将 `窗口` 缩小。默认 窗口 设置为 `0 - n-1`

总共有 3 种情况：

- 两端和等于 target ：输出两个数

- 两端和小于 target ：左端右移
- 两端和大于 target ：右端左移

## 代码

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
          l, r = 0, len(nums) - 1
          while True:
              if nums[l] + nums[r] == target:
                   return [nums[l], nums[r]]
              elif nums[l] + nums[r] > target:
                   r -= 1
              else:
                   l += 1
```
