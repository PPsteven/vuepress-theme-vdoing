---
title: 面试题51. 数组中的逆序对
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/cd9898/
---

## 题目描述

> 做题链接：[剑指 Offer 51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

<!--more-->

## 解题思路

### 方法一：折半直接插入

直接插入排序是最容易想到的思路，因为直接插入排序是一个一个依次插入，因为每次插入的时候都需要进行比较，所以，逆序对可以看做其中间产物。

举一个例子： **[4, 3, 1, 5]**

| 排序数组         | 逆序对    |
| ---------------- | --------- |
| [**4**]          | 0         |
| [**3**, 4]       | 1         |
| [**1**, 3, 4]    | 1 + 2     |
| [1, 3, 4, **5**] | 1 + 2 + 0 |

所谓的 逆序对就是看排序后右边数字的个数

> 查找的时间复杂度为 $O(log_2N)$ ，插入的时间复杂度为 $O(N)$



### 方法二：归并排序

上面一种解法是利用了折半插入的中间产物，而实际上，归并也会产生类似的中间产物

举例：$[4,3,1,2,5,6,8,7]$

| 编数   | 排序过程                            | 逆序对 |
| ------ | ----------------------------------- | ------ |
| 原始   | [4, 3] [1, 2] [5, 6] [8, 7]         | 0      |
| 第一遍 | **[3, 4]** [1, 2] [5, 6] **[7, 8]** | 2      |
| 第二遍 | **[1, 2, 3, 4]** [5, 6, 7, 8]       | 4      |
| 第三遍 | [1, 2, 3, 4, 5, 6, 7, 8]            | 0      |
|        | 总逆序对                            | 6      |

## 代码

> 代码一：折半直接插入法

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        if not nums: return 0
        res, sorted = 0, [nums[0]]
        for i in range(1, len(nums)):
            left, right = 0, i - 1
            while left < right:
                mid = (left + right) >> 1
                if nums[i] >= sorted[mid]:
                    left = mid + 1
                else:
                    right = mid - 1
            if nums[i] >= sorted[left]: left += 1 # 对于 [4] [5, 6], 我们要的是1， 不是0
            sorted.insert(left, nums[i])
            res += i - left
        return res 
```



> 代码二：折半直接插入法--bisert改写

当然，也可以使用 Python 自带的二分插入的库  `bisect` 去改写，不用自己去写二分查找和插入的逻辑

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        sort = []
        ret = 0
        for i in range(len(nums)):
            pos = bisect.bisect_right(sort, nums[i]) # 二分查找，找到第一个大于nums[i]的位置
            sort.insert(pos, nums[i]) # 插入
            ret += i - pos # 位于插入元素右侧的个数就是逆序对的个数
        return ret 
```



> 代码三：归并排序

```python
class Solution:
    def reversePairs(self, nums):
        def merge_sort(nums):
            if len(nums) < 2:
                return nums
            mid = len(nums) >> 1
            left, right = merge_sort(nums[:mid]), merge_sort(nums[mid:])
            return merge(left, right)
        
        def merge(left, right):
            l, r, temp = 0, 0, []
            while l < len(left) and r < len(right):
                if left[l] <= right[r]:
                    temp.append(left[l])
                    l += 1
                else:
                    temp.append(right[r])
                    self.res += len(left) - l
                    r += 1
            temp += left[l:]
            temp += right[r:]
            return temp
        
        self.res = 0
        merge_sort(nums)
        return self.res
```

