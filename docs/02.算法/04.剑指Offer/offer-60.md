---
title: 面试题60. n个骰子的点数【困难】
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/dbe5bf/
---

## 题目描述

> 做题链接：[面试题60. n个骰子的点数【困难】](https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/)

把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

```
输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
```

<!--more-->

## 解题思路

动态规划

> 参考： [容易理解的python动态规划方法！](https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/rong-yi-li-jie-de-pythondong-tai-gui-hua-fang-fa-b/)

  本题采用动态规划的方法去做，根据题意，1个骰子总共有6个情况，n个骰子共有 $6^n$ 种情况。

  不妨令 $dp(i,j)$ ，其中 i 代表 骰子的格数，j 代表 i 个骰子的数字之和。

  我们可以很容易的得到  **递推方程**：
$$
  dp(i, j) = dp(i-1,j-1) + dp(i-1,j-2) + \dots +dp(i-1, j-6) \\
           = \sum_{d=1}^{min(j-n+1, 6)} dp(i-1,j-d)
$$
  对于 d 的范围 $min(s-n+1, 6)$ 的解释是，$dp(3,2)$ 是不合理的，因为3个骰子的和最小是3，用代数标识即为 $ j-d \ge i-1$ ，即 $6 \ge j - i + 1 \ge d $ 。

  对于 **递推方程** 的初始化条件：
$$
  dp(1,j) = 1, j = 1, 2,3,4,5,6
$$

## 代码

```python
class Solution:
    def twoSum(self, n: int) -> List[float]:
        dp = [[0] * (6 * n + 1) for _ in range(n + 1)]  # 递归方程初始条件
        for i in range(1, 7): 
            dp[1][i] = 1
        for i in range(2, n + 1):
            for j in range(i, 6 * i + 1): # 和的范围在 i ~ 6 * i
                for k in range(1, 7): # 减的范围在 1 ~ 6
                    if j - k < i - 1: break
                    dp[i][j] += dp[i - 1][j - k]
        base = 6 ** n
        return [_ / base for _ in dp[n]][n:]
```
