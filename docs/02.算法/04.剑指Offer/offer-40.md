---
title: 面试题40. 最小的k个数
date: 2020-08-17 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/d8fc33/
---

## 题目描述

> 做题链接：[面试题40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

<!--more-->

## 解题思路

### 方法一： 堆排

本题最适合的 $O(nlog_2n)$ 级的排序方法为堆排，小根堆满足题目所需的要求

> 时间复制度：$O(Nlog_2k)$ ，空间复杂度 $O(N)$

### 方法二：快速排序

快速排序看上去并不适合本题的解法，简单的快排没有利用到 `快排` 的特殊性质，由于每次排完之后，存在 `左 < 中 < 右 ` 

- `中 == k - 1` 我们已经获得了前K个元素，但是也没有排序
- `中 > k - 1` 只需要在左边找
- `中 < k - 1` 只需要在右边找

若是当左边的元素个数正好等于所求的最小k的元素，那么就完全了排序。

> 时间复杂度: $O(N log_2 N)$， 空间复杂度 $O(1)$ 

## 代码

> 方法一：堆排--自己实现

```python
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
       def adjust_heap(nums, i, size):
           lchild = 2 * i + 1
           rchild = 2 * i + 2
           max = i
           if i < size / 2:
               if lchild < size and nums[lchild] > nums[max]: max = lchild
               if rchild < size and nums[rchild] > nums[max]: max = rchild
               if max != i:
                   nums[max], nums[i] = nums[i], nums[max]
                   adjust_heap(nums, max, size)
        
       def build_heap(nums):
            size = len(nums)
            for i in range(0, size >> 1)[::-1]:
                adjust_heap(nums, i, size)
       
       if not arr: return []
       arr = [-1 * _ for _ in arr]
       build_heap(arr)
       size = len(arr)
       for i in range(len(arr) - 1, len(arr) - 1 - k, -1):
        #    print(arr)
           arr[0], arr[i] = arr[i], arr[0]
           adjust_heap(arr, 0, i)
       arr = [-1 * _ for _ in arr][::-1]
       
       return arr[:k]
```



> 方法一：堆排--Python自带的堆结构

```python
import heapq
from random import shuffle
class Solution:
    def getLeastNumbers(self, arr, k: int) :
        shuffle(arr)  # 随机排序
        heapq.heapify(arr) # 建立堆结构
        return heapq.nsmallest(k, arr)
```



> 方法二：快速排序

```python
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        def quicksort(nums, start, end):
            if start >= end: return 
            pivot = nums[start]
            low, high = start, end
            while low < high:
                while low < high and nums[high] >= pivot: high -= 1
                nums[low] = nums[high]
                while low < high and nums[low] < pivot: low += 1
                nums[high] = nums[low]
            nums[low] = pivot
            if low == k - 1:
                return arr[:k]
            elif low < k - 1:
                quicksort(nums, low + 1, end)
            else:
                quicksort(nums, start, low - 1)
```

