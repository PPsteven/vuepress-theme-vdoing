---
title: 面试题14- I. 剪绳子【非常经典】
date: 2020-08-13 15:53:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/ed86b6/
---

## 题目描述

> 做题链接：[面试题14- I. 剪绳子【非常经典】](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)
>

剪绳子，比如当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

<!--more-->

## 解题思路

> 参考：[腐烂的橘子🍊](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/)

### 方法一：【记忆化搜索】【递归】

递归函数中存在大量重复的计算，记忆化技术，可以帮助缩小时间，通过计算机验证

> 时间复杂度 $O(n^2)$  空间复杂度 $O(n)$

### 方法二：【动态规划】【自底向上】

**解题思路：动态规划（自底向上）(推荐方法)**

  > 时间复杂度 $O(n)$ 空间复杂度 $O(n)$

  动态规划的核心是，设定边界条件 和 状态转移方程 。

  建议一维动态数组 `dp` :

  - 边界条件：$dp[1] = dp[2] = 1$ ，表示长度为 2 的绳子最大乘积为 1；
  - 状态转移方程： $dp[i] = max(dp[i], max((i-j)*j, j*dp[i-j]))$

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200704150131.png)



### 方法三： 数学推导

这一部分属于数据公式的证明，可以参考如下教程，比较清晰

> [面试题14- I. 剪绳子（数学推导 / 贪心思想，清晰图解）](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/mian-shi-ti-14-i-jian-sheng-zi-tan-xin-si-xiang-by/)

## 代码

> 方法一：递归 + 记忆化搜索

```python
class Solution:
    def cuttingRope(self, n: int) -> int:
        def f(n):
            if n in memory: return memory[n]
            res = -1
            for i in range(1, n):
                res = max(res, f(i) * (n - i), i * (n - i))
            memory[n] = res
            return memory[n]
        memory = {1: 1} # 可以将终止条件设置在 记忆化矩阵中
        return f(n)
```



> 方法二：动态规划

```python
# 作者：z1m
# 链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/

class Solution:
    def cuttingRope(self, n):
        dp = [0, 1, 1]

        for i in range(3, n + 1):
            dp[i % 3] = max(max(dp[(i - 1) % 3], i - 1),
                    2 * max(dp[(i - 2) % 3], i - 2),
                    3 * max(dp[(i - 3) % 3], i - 3))
        return dp[n % 3]
```



