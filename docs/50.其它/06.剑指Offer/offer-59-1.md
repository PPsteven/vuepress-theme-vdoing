---
title: 面试题59 - I. 滑动窗口的最大值
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/19647f/
---

## 题目描述

> 做题链接：[面试题59 - I. 滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

给定一个数组 `nums` 和滑动窗口的大小 `k`，请找出所有滑动窗口里的最大值。

```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

<!--more-->

## 解题思路

### 方法一：模拟队列

模拟 [面试题30. 包含min函数的栈](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/) 的思路，实现一个类似的结构

实现的思路参考如下图，来自 [面试题59 - I. 滑动窗口的最大值（单调队列，清晰图解）](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/)

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200713151806.png" style="zoom:33%;" />

**模拟队列的实现**

```python
class MaxQueue:
    def __init__(self):
        self.data, self.max_data = collections.deque(), collections.deque()
    
    def push(self, value):
        self.data.append(value)
        while self.max_data and value > self.max_data[-1]: self.max_data.pop()
        self.max_data.append(value)
    
    def pop(self):
        if self.max_data and self.data.popleft() == self.max_data[0]:
            self.max_data.popleft()
    
    @property
    def max_value(self):
        if self.max_data:
            return self.max_data[0]
```



### 方法二：三指针

设置三个指针：i，j 标记滑动窗口的范围，pmax 标记最大值的位置

最大值修改的情况有两种种：

- 当移出的元素正好是最大值的时候，需要遍历一遍滑动窗口，寻找新的最大值
- 当新加入的元素比最大值还大，那么最大值的位置直接就是新元素的位置。



## 代码

> 代码一：模拟队列

```python
class MaxQueue:
    def __init__(self):
        self.data, self.max_data = collections.deque(), collections.deque()
    
    def push(self, value):
        self.data.append(value)
        while self.max_data and value > self.max_data[-1]: self.max_data.pop()
        self.max_data.append(value)
    
    def pop(self):
        if self.max_data and self.data.popleft() == self.max_data[0]:
            self.max_data.popleft()
    
    @property
    def max_value(self):
        if self.max_data:
            return self.max_data[0]
        

class Solution:
   def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if not nums: return []
        queue, ret = MaxQueue(), []
        for _ in range(k):  # 先将k个放入队列中
            queue.push(nums[_])
        ret.append(queue.max_value)
        j = k - 1
        while j < len(nums) - 1:
            queue.pop()
            j += 1
            queue.push(nums[j])
            ret.append(queue.max_value)
        return ret 
```



> 代码二：间接代码

实现思路同上，只是代码更加简单了

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
  
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        deque = collections.deque()
        res, n = [], len(nums)
        for i, j in zip(range(1 - k, n + 1 - k), range(n)):
            if i > 0 and deque[0] == nums[i - 1]: deque.popleft() # 删除 deque 中对应的 nums[i-1]
            while deque and deque[-1] < nums[j]: deque.pop() # 保持 deque 递减
            deque.append(nums[j])
            if i >= 0: res.append(deque[0]) # 记录窗口最大值
        return res
```



> 代码三：三指针

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        def find_max_postion(nums, i, j):
            pmax = i
            for k in range(i + 1, j + 1):
                if nums[k] > nums[pmax]: pmax = k
            return pmax
        
        if not nums: return []
        pmax, ret = find_max_postion(nums, 0, k - 1), []
        ret.append(nums[pmax])

        i, j = 1, k
        while j < len(nums):
            if i - 1 == pmax: # 移出的数值正好是最大值
                pmax = find_max_postion(nums, i, j)
            if nums[j] > nums[pmax]: # 如果加入的数值比 最大值还要大，修改最大值的位置
                pmax = j 
            ret.append(nums[pmax])
            i += 1
            j += 1
        return ret 
```

