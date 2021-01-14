---
title: 面试题46. 把数字翻译成字符串
date: 2020-08-17 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/c444cf/
---

## 题目描述

> 做题链接：[面试题46. 把数字翻译成字符串](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

<!--more-->

## 解题思路

### 方法一：递归解法

本题用递推去解决非常方便，只是把各种情况递归解决就好

如 dfs(112) =>

- 'a' 和 dfs(12) 
- 'I'  和 dfs(2)            

### 方法二： 动态规划

> 参考:  [这个教程](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/mian-shi-ti-46-ba-shu-zi-fan-yi-cheng-zi-fu-chua-6/)

- **动态规划-转移方程**
  $$
  dp(i)=\left\{ \begin{aligned} dp(i - 2) + dp(i - 1) , \quad & between \ 0..25 
   \\dp(i - 1), \quad & else \end{aligned} \right.
  $$


  **边界条件**
$$
  dp(0) = dp(1) = 1
$$


## 代码

> 代码一： 递归解法

```python
class Solution:
    def translateNum(self, num: int) -> int:
        """ 递归解法 """
        def dfs(s):
            if s == "": 
                self.ret += 1
                return 
            dfs(s[1:])
            if len(s) > 1 and s[:2] >= '10' and s[:2]<="25": # 符合条件就继续向下
                dfs(s[2:])
        self.ret = 0
        dfs(str(num))
        return self.ret
```

> 代码二： 动态规划

```python
class Solution:
    def translateNum(self, num: int) -> int:
        """ dp 表达式改写 """
        s = str(num)
        dp = [0] * (len(s) + 1)
        dp[0] = dp[1] = 1  # dp 从 1 开始计数
        for i in range(2, len(s) + 1): 
            if 10 <= int(s[i-2 : i]) <= 25:  # s 从 0 开始计数
                dp[i] = dp[i - 1] + dp[i - 2]
            else:
                dp[i] = dp[i - 1]
        return dp[len(s)]
```

