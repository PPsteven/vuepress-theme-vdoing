---
title: 面试题38. 字符串的排列【全排列】
date: 2020-08-16 20:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/1ff071/
---

## 题目描述

> 做题链接：[面试题38. 字符串的排列【全排列】](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

<!--more-->

## 解题思路

全排列题目一般使用回溯的方法

### 方法一： 回溯 + 位置唯一

比如有长度为3的字符串，那么根据排序组合的原理，可以有 012， 021， 102，120，210，201 这六种情况。故本方法就是枚举出这些状态

### 方法二：回溯 + 交换 + visited 过滤

> 参考：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/mian-shi-ti-38-zi-fu-chuan-de-pai-lie-hui-su-fa-by/

## 代码

> 方法一：回溯 + 位置唯一

```python
class Solution:
    def permutation(self, s: str):
        def recur(st):
            if len(st) == len(s):
                 res.append(st)
                 return
            for i in range(len(s)):
                if i not in visited:
                    visited.append(i)
                    recur(st + s[i])
                    visited.remove(i)

        visited, res = [], []
        recur("")
        return list(set(res))  # 集合去重
```



> 方法二：回溯 + 交换 + visited 过滤

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/mian-shi-ti-38-zi-fu-chuan-de-pai-lie-hui-su-fa-by/

class Solution:
    def permutation(self, s: str) -> List[str]:
        c, res = list(s), []
        def dfs(x):
            if x == len(c) - 1:
                res.append(''.join(c)) # 添加排列方案
                return
            dic = set()
            for i in range(x, len(c)):
                if c[i] in dic: continue # 重复，因此剪枝
                dic.add(c[i])
                c[i], c[x] = c[x], c[i] # 交换，将 c[i] 固定在第 x 位
                dfs(x + 1) # 开启固定第 x + 1 位字符
                c[i], c[x] = c[x], c[i] # 恢复交换
        dfs(0)
        return res
```

