---
title: 面试题41. 数据流中的中位数【困难】
date: 2020-08-17 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/620a62/
---

## 题目描述

> 做题链接：[面试题41. 数据流中的中位数【困难】](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

<!--more-->

## 解题思路

### 方法一：暴力排序法

使用 Python 自带的 sort 方法，可以极限通过LeetCode的测试

### 方法二：二分插入

> 参考：[腐烂的橘子🍊](https://leetcode-cn.com/u/z1m/)  [图解 排序+二分查找+优先队列](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/you-xian-dui-lie-by-z1m/)

排序法是针对无序数组，本题中最适合的排序方法是 **直接插入排序**，Python 自带的 `bisect` 已经为我们提前实现了 `二分插入` 

Tips:

- 当 数组长度为奇数时，直接返回中位数：`nums[len(nums)>>1]`

- 当 数组长度为偶数时，直接返回平均数：

  `(nums[len(nums)//2] + nums[len(nums)//2 +1])/2`

```python
# a 查找数组；x为插入的元素；lo,hi 约定为数组的范围
bisect.insort(a, x, lo=0, hi=len(a)) # 折半插入，若存在x则插入x的右侧
bisect.insort_right # 同 bisect.insort
bisect.insort_left #  折半插入，若存在x则插入x的左侧
# 有以下三种方法，对应上面的插入方法。不同的是，它们只返回应插入的位置
bisect.bisect
bisect.bisect_left
bisect.bisect_right
```

### 方法三：优先队列

维持两个根堆，一个是大顶堆A，一个是小顶堆B。其中A的最大元素 小于 B的最小元素。

寻找中位数的思路：**令m为A的长度，n为B的长度，N为总长度​**

- 当 m = n 时，证明N为偶数，中位数为 (A的堆顶 + B的堆顶)/2
- 当 m != n 时，证明N为奇数，中位数为A的堆顶(也可以取B的堆顶，类推)
- Tips:
  - 为了保存中位数一直在A的堆顶，要保证A的长度始终要大于等于B。而且所有元素一定要在A，B中都调整过。
  - 当 m = n 时，应该向A推元素，故应**先推B，再推A**，此时 A 有 m + 1 个，B有 n 个
  - 当 m != n 时，应该向B推元素，因为我们始终保持的是A的数量大于B。即 m >= n。故应**先推A再推B**，此时 A 有 m，B 有 n + 1 个
  - 我们可以看出，先推的那个总是长度不变的，可以直接使用 `heapq.hashpushpop()` 方法
  - A 是大堆顶，故 `push&pop` 的时候应该注意使用负数。heapq 实现了小顶堆，需要借助 负号 实现大根堆

> 时间复杂度：$O(logn)$。堆插入和删除需要$O(logn)$，查找中位数需要$O(1)$。
> 空间复杂度：$O(n)$

## 代码

> 代码一：暴力解法

```python
class MedianFinder:
    def __init__(self):
        self.store = []

    def addNum(self, num: int) -> None:
        self.store.append(num)

    def findMedian(self) -> float:
        self.store.sort()
        n = len(self.store)
        if n & 1 == 1: # n 是奇数
            return self.store[n // 2]
        else:
            return (self.store[n // 2 - 1] + self.store[n // 2]) / 2
```

> 代码二：二分插入

```python
class MedianFinder:
    def __init__(self):
        self.A = []

    def addNum(self, num: int) -> None:
        bisect.insort(self.A, num)

    def findMedian(self) -> float:
        size = len(self.A)
        if size & 1 == 0: # even
            return (self.A[size >> 1] + self.A[(size >> 1) - 1]) / 2 
        else:
            return self.A[size >> 1]  
```

> 代码三：优先队列

默认保证 大根堆的个数 >= 小根堆的个数

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/mian-shi-ti-41-shu-ju-liu-zhong-de-zhong-wei-shu-y/

class MedianFinder:

    def __init__(self):
        self.max_heap, self.min_heap = [], []

    def addNum(self, num: int) -> None:
        if len(self.max_heap) == len(self.min_heap): # 先推小根堆，最后大根堆个数=小根堆+1
             heapq.heappush(self.max_heap,
                            -heapq.heappushpop(self.min_heap, num)) 
        else:  # 先推大根堆，最后大根堆个数=小根堆
             heapq.heappush(self.min_heap,
                            -heapq.heappushpop(self.max_heap, -num))
            
    def findMedian(self) -> float:
        if len(self.max_heap) == len(self.min_heap):
            return (- self.max_heap[0] + self.min_heap[0])/2
        else:
            return - self.max_heap[0]
```
