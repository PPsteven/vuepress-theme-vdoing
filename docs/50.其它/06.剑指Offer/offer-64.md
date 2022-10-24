---
title: 面试题63. 股票的最大利润
date: 2020-08-20 18:19:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/814c92/
---

## 题目描述

> 做题链接：[面试题63. 股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/)

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

<!--more-->

## 解题思路

本题比较简单，寻找滑动窗口内的最大的波动范围

- 当出现比最小值更小的值的时候，更新 滑动窗口的左端（记录最小值）
- 不停的右移
- 同时计算最大获利 `i - min_value`

> 这里只买卖一次股票，若是可以多次买卖股票的话，需要用到 `动态规划`

## 代码

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices: return 0
        ret, min_value = 0, prices[0]
        for i in prices[1:]:
            if i < min_value: min_value = i
            ret = max(ret, i - min_value)
        return ret
```

