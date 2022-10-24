---
title: 面试题53 - I. 在排序数组中查找数字 I【经典】
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/e19bc6/
---

## 题目描述

> 做题链接：[面试题53 - I. 在排序数组中查找数字 I【经典】](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

<!--more-->

## 解题思路

基础二分小变形

- 使用二分找到左边的点
- 使用二分找到右边的点

## 代码

> 代码一：二分查找，自己实现

```python
def searchRange(arr, l, r, target):
    leftLimit = binarySearchLeft(arr, l, r, target)
    rightLimit = binarySearchRight(arr, l, r, target)
    return [leftLimit, rightLimit]

def binarySearchLeft(arr, l, r, target):
    while l <= r:
        pivot = int(l + (r - l)/2) 
        if arr[pivot] > target:
             r = pivot - 1
        elif arr[pivot] < target:
             l = pivot + 1
        elif pivot == 0 or arr[pivot - 1] != target: # 找到（左边不等）
            return pivot
        else: # 因为是要找寻最左的，所以遇到相同的话，向左走
            r = pivot - 1
    return -1

def binarySearchRight(arr, l, r, target):
    while l <= r:
        pivot = int(l + (r - l)/ 2)
        if arr[pivot] > target:
            r = pivot - 1
        elif arr[pivot] < target:
            l = pivot + 1
        elif pivot == r or arr[pivot + 1] != target: # 找到（右边不等）
            return pivot
        else: # 因为是要找寻最右的，所以遇到相同的话，向右走
            l = pivot + 1
    return -1 
ret = searchRange([5,7,7,8,8,10], 0, 5, 8)
print(ret)
```



> 代码二：二分查找，自己实现--bisert实现

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = bisect.bisect_left(nums, target)
        j = bisect.bisect_right(nums, target)
        return j - i
```



