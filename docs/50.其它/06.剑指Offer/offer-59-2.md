---
title: 面试题59 - II. 队列的最大值
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/0aeefb/
---

## 题目描述

> 做题链接：[面试题59 - II. 队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

<!--more-->

## 解题思路

实现的思路参考如下图，来自 [面试题59 - I. 滑动窗口的最大值（单调队列，清晰图解）](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/)

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200713151806.png" style="zoom:33%;" />

## 代码

```python
class MaxQueue:

    def __init__(self):
        self.data, self.max_data = collections.deque(), collections.deque()

    def max_value(self) -> int:
        if self.max_data: return self.max_data[0]
        else: return -1
        
    def push_back(self, value: int) -> None:
        self.data.append(value)
        while self.max_data and value > self.max_data[-1]: 
            self.max_data.pop()
        self.max_data.append(value)

    def pop_front(self) -> int:
        if not self.max_data: return -1
        pop_data = self.data.popleft()
        if pop_data == self.max_data[0]:
            self.max_data.popleft()
        return pop_data
```
