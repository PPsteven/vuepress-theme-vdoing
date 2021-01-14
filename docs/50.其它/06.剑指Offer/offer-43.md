---
title: 剑指 Offer 43. 1～n整数中1出现的次数
date: 2020-08-17 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/403c13/
---

## 题目描述

> 做题链接：[剑指 Offer 43. 1～n整数中1出现的次数](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/)

<!--more-->

## 解题思路

递归

> 参考：[python递归](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/pythondi-gui-by-rainiee-pan/)

可以分为两种情况，第一种情况是最高位为1，第二种情况是最高位非1

- 最高位为1

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200819113721.png)

- 最高位非1

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200819113931.png)

## 代码

```python
class Solution:
    def countDigitOne(self, n: int) -> int:
        if n <= 0: return 0
        num_s = str(n) 
        high = int(num_s[0])  
        pow_ = 10**(len(num_s)-1) 
        last = n - high * pow_

        if high == 1:
            return self.countDigitOne(pow_ - 1) + last + 1 + self.countDigitOne(last)
        else:
            return self.countDigitOne(last) + pow_ + high * self.countDigitOne(pow_ - 1)
```
