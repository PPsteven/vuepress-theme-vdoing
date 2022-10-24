---
title: 面试题56 - I. 数组中数字出现的次数
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/39e8ec/
---

## 题目描述

> 做题链接：[面试题56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

在一个数组 `nums` 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

<!--more-->

## 解题思路

### 方法一：哈希表

由于本题没有 空间复杂度为  $O(n)$ 的限制，所以直接使用 `哈希表` 是一个比较好的方法

> 时间复杂度 $O(n)$ ，空间复杂度 $O(n)$

### 方法二：位运算

$[9,1,7,9,7,9,7]$ 可以依次按位统计
$$
1001 \\
0001 \\
0111 \\
1001 \\
0111 \\
1001 \\
0111 \\
----\\
3337 \\
$$
对最后的统计结果对 3 求余，3337 就变成  $(0001)_b=1$  ，1为我们的结果

## 代码

> 代码一：哈希表

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        d = {}
        for number in nums:
            if d.get(number): d[number] += 1
            else: d[number] = 1
        for k, v in d.items():
            if v == 1:
                return k
```

> 代码二：位运算（异或运算）

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        counts = [0] * 32
        for num in nums:
            for j in range(32):
                counts[j] += num & 1
                num = num >> 1
        res, m = 0, 3
        d = 1
        for i in range(32):
            counts[i] = counts[i] % m
            res += counts[i] * d
            d = d << 1
        return res 
```

- Tips:

  对于最后二进制转换的地方，我们有两种计算方法

  ```python
  # [1,0,1,1,0..0]
  # 第一种计算方法: 1*1 + 0*2 + 1*4 + 1*8 = 13
  for i in range(32):
  	  counts[i] = counts[i] % m
      res += counts[i] * d
      d = d << 1
  # 第二种计算方法： 直接位移操作
  for i in range(32):
      res <<= 1
      res |= counts[31 - i] % m
      res if counts[31] % m == 0 else ~(res ^ 0xffffffff)
  ```

- Python 中的负数问题

  >  https://www.runoob.com/w3cnote/python-negative-storage.html