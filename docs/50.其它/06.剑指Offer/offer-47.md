---
title: 面试题47. 礼物的最大价值
date: 2020-08-17 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/8f1c49/
---

## 题目描述

> 做题链接：[面试题47. 礼物的最大价值](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/)

<!--more-->

## 解题思路

### 方法一：搜索法

本题，可以尝试使用 DFS 和 BFS 去尝试一下，本题明显偏向使用 BFS 做比较合适。

但是尝试两种搜索算法发现，都超时严重。       

### 方法二： 动态规划

> 参考:  [这个教程](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/mian-shi-ti-47-li-wu-de-zui-da-jie-zhi-dong-tai-gu/)

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200711214955.png" style="zoom: 50%;" />

## 代码

> 代码一： DFS(超时)

```python
class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        def dfs(i, j):
            if i >= m or j >=n: return
            self.value += grid[i][j]
            self.ret = max(self.ret, self.value)
            dfs(i + 1, j)
            dfs(i, j + 1)
            self.value -= grid[i][j]

        self.value, self.ret = 0, 0
        m, n = len(grid), len(grid[0])
        dfs(0, 0)
        return self.ret
```

> 代码二： BFS（超时）

```python
class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        if not grid: return 0
        res, queue = 0, collections.deque()
        queue.append((0,0, grid[0][0]))
        n, m = len(grid[0]), len(grid)
        while queue:
            for _ in range(len(queue)):
                temp_x, temp_y, value = queue.popleft()
                if temp_x + 1 < n:
                      queue.append((temp_x + 1, temp_y, value + grid[temp_y][temp_x + 1]))
                if temp_y + 1 < m:
                      queue.append((temp_x, temp_y + 1, value + grid[temp_y + 1][temp_x]))
                res = max(res, value)
        return res 
```

> 代码三：动态规划

```python
def maxValue(self, grid: List[List[int]]) -> int:
        """ 直接实现的动态规划 """
        m, n = len(grid), len(grid[0])
        dp = [[0] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    dp[i][j] = grid[0][0]
                elif i == 0:
                    dp[i][j] = dp[i][j-1] + grid[i][j]
                elif j == 0:
                    dp[i][j] = dp[i-1][j] + grid[i][j]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        return dp[m-1][n-1]
```

> 代码四：优化的动态规划

上面的动态规划做了太多的逻辑判断，我们发现很多是不必要做的，可以统一起来。

做法就是 dp 从下标 (1, 1)开始，最后的(m, n) 是结果。这样成功的原因是，上侧，左侧都不会产生越界错误了。

```python
def maxValue(self, grid: List[List[int]]) -> int:
        """ 优化的动态规划 """
        m, n = len(grid), len(grid[0])
        dp = [[0] * (n + 1) for _ in range(m + 1)]  # dp 是 从1,1 开始的。原因是为了避免复杂的逻辑判断
        dp[1][1] = grid[0][0]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
        return dp[m][n]
```

