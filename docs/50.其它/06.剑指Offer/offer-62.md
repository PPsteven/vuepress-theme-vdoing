---
title: 面试题61. 扑克牌中的顺子
date: 2020-08-20 18:19:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/1d3ebb/
---

## 题目描述

> 做题链接：[面试题61. 扑克牌中的顺子](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)

从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

```
输入: [1,2,3,4,5]
输出: True
```

<!--more-->

## 解题思路

由于存在大小王，所以可能存在 $[0,0,3,0,5]$ 这样不连续的数组，故不知道数组的起点。解决方法就是限制数组的范围。这里数组 $5-3=2<5$ ，所以是顺子。

若存在 $[1,0,0,6,7]$ ，数组范围为 $7-1=5$ 超出五张顺子的范围，所以不是顺子。

判断：

- 若存在两张相同的牌 => 不是顺子
- 若最大最小值之差 大于等于 5 => 不是顺子

> 时间复杂度 $O(1)$ ，空间复杂度 $O(1)$

## 代码

```python
class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        repeat = set()
        ma, mi = 0, 14
        for num in nums:
            if num == 0: continue # 跳过大小王
            ma = max(ma, num) # 最大牌
            mi = min(mi, num) # 最小牌
            if num in repeat: return False # 若有重复，提前返回 false
            repeat.add(num) # 添加牌至 Set
        return ma - mi < 5 # 最大牌 - 最小牌 < 5 则可构成顺子 
```
