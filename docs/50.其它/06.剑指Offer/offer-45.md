---
title: 面试题45. 把数组排成最小的数
date: 2020-08-17 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/c13286/
---

## 题目描述

> 做题链接：[面试题45. 把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

<!--more-->

## 解题思路

### 方法一：快排 + 自定义排序规则

排序判断规则： 设 $nums$任意两数字的字符串格式 $xx$ 和 $yy$ ，则
若拼接字符串 $x + y > y + x$ ，则 $m > n$ ；
反之，若 $x + y < y + x$ ，则 $n < m$ ；

> 参考： [Krahets](https://leetcode-cn.com/u/jyd/) [面试题45. 把数组排成最小的数（自定义排序，清晰图解）](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/)

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200711124357.png" style="zoom: 50%;" />

### 方法二： 自定义排序规则 + Python 实现的自定义排序

```python
strs.sort(key = functools.cmp_to_key(sort_rule))
```

## 代码

> 代码一： 快排 + 自定义规则

```python
def minNumber(self, nums) :
        """ python 快排实现 自定义规则 """
        def greater_than(x, y):
            return True if x + y >= y + x else False
        
        def quick_sort(nums, start, end):
            if start >= end: return 
            low, high = start, end
            pivot = nums[low]
            while low < high:
                while low < high and greater_than(nums[high], pivot): 
                    high -= 1
                nums[low] = nums[high]
                while low < high and not greater_than(nums[low], pivot): 
                    low += 1
                nums[high] = nums[low]
            nums[low] = pivot
            quick_sort(nums, start, low - 1)
            quick_sort(nums, low + 1, end)
        
        nums_str = [str(_) for _ in nums]
        quick_sort(nums_str, 0, len(nums_str) - 1)
        return ''.join(nums_str)
```

> 代码二： Python 自定义排序规则

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/

class Solution:
    def minNumber(self, nums: List[int]) -> str:
        def sort_rule(x, y):
            a, b = x + y, y + x
            if a > b: return 1
            elif a < b: return -1
            else: return 0
        
        strs = [str(num) for num in nums]
        strs.sort(key = functools.cmp_to_key(sort_rule))
        return ''.join(strs)
```

