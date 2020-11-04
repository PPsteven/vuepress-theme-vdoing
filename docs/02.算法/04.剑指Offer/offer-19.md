---
title: 面试题19. 正则表达式匹配【困难】
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/bcca99/
---

## 题目描述

> 做题链接：[面试题19. 正则表达式匹配【困难】](https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)
>

设计一个函数用来实现正则表达式

<!--more-->

## 解题思路

本题的 【Hard】模式，正是因为考虑的情形比较多，很容易一些小细节漏做。尽管整理的时候已经是二次刷题了，但是还是花了 `1H` 调试+重写才成功

### 方法一： 正查递归

 考虑到的极端情况

  - ab <--> ab
  - ab <--> .*
  - ab* 的时候，b 零次的信息很容易漏掉
  - 终止条件： `if not p: return not a`
  - 判断相等逻辑： `p[0] in {s[i], '.'}`

### 方法二： 倒茶递归

> 倒查递归，思路参考
> https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/zhu-xing-xiang-xi-jiang-jie-you-qian-ru-shen-by-je/

1. 正则串是 正常字符串匹配/. s[:n-2] p[:m-2]
2. 正则串带 * 
    a. 先直接去除 c* s,p[:m-2] 
    b. 如果匹配*前的字符串， s[:n-1] p
3. 正常字符串 不匹配 直接返回False

### 方法三：动态规划

> 作者：z1m
>
> 链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/hui-su-dong-tai-gui-hua-by-ml-zimingmeng/

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200705160832.png)



## 代码

> 方法一：递归（Ugly）

```python
class Solution:
      def isMatch(self, s: str, p: str) -> bool:
          if not p: return not s
          # ab <--> a* 带星号的一定要先处理，不然在 s='' p='*b'的时候会出错
          if len(p) > 1 and p[1] == '*':
               if self.isMatch(s, p[2:]): return True # 零次情况考虑到
               i = 0
               while i < len(s) and p[0] in {s[i], '.'}: # aaab a*b
                  if self.isMatch(s[i+1:], p[2:]): return True 
                  i += 1
          if p and s and p[0] in {s[0], '.'}: # ab <--> ab
               return self.isMatch(s[1:], p[1:])
          else:
               return False
```



> 方法一：递归（Graceful）

于此，我们又发现可以改进的地方

  ```python
  while i < len(s) and p[0] in {s[i], '.'}: # aaab a*b
       if self.isMatch(s[i+1:], p[2:]): return True 
  ```
  可以列一张表，看到这里的 `while` 循环是不必要的，因为递归程序会帮我们一次次最终走到 `* 三次` 的情况，不需要我们自己显式的去写出，而且就算写出了，程序也走不到。

|        | s    | p    | value           |
| ------ | ---- | ---- | --------------- |
| 原始   | aaab | a*b  | *True*          |
| * 零次 | aaab | b    | False           |
| * 一次 | aab  | b    | False--> * 二次 |
| * 二次 | ab   | b    | False-->* 三次  |
| * 三次 | b    | b    | True            |

```python
class Solution:
      def isMatch(self, s: str, p: str) -> bool:
          if not p: return not s
          # ab <--> a* 带星号的一定要先处理，不然在 s='' p='*b'的时候会出错
          if len(p) > 1 and p[1] == '*':
               if self.isMatch(s, p[2:]): return True # 零次情况考虑到
               if p and s and p[0] in {s[0], '.'} and self.isMatch(s[1:], p): return True 
          if p and s and p[0] in {s[0], '.'}: # ab <--> ab
               return self.isMatch(s[1:], p[1:])
          else:
               return False
```



> 方法一：大神精简代码

```python
# 作者：z1m
# 链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/hui-su-dong-tai-gui-hua-by-ml-zimingmeng/

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p: return not s
        # 第一个字母是否匹配
        first_match = bool(s and p[0] in {s[0],'.'})
        # 如果 p 第二个字母是 *
        if len(p) >= 2 and p[1] == "*":
            return self.isMatch(s, p[2:]) or \
            first_match and self.isMatch(s[1:], p)
        else:
            return first_match and self.isMatch(s[1:], p[1:])
```



> 方法二：倒查递归

```python
def isMatch(self, s: str, p: str) -> bool:
        if not p : return not s
        if s and p[-1] in {s[-1], '.'}: 
            return self.isMatch(s[:-1], p[:-1])
        
        if p[-1] == '*':
            return self.isMatch(s, p[:-2]) or \
                   bool(s and p[-2] in {s[-1], '.'} and self.isMatch(s[:-1], p))
        else:
            return False
```



> 方法三：动态规划

```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # 边界条件，考虑 s 或 p 分别为空的情况
        if not p: return not s
        if not s and len(p) == 1: return False

        m, n = len(s) + 1, len(p) + 1
        dp = [[False for _ in range(n)] for _ in range(m)]
        # 初始状态
        dp[0][0] = True
        dp[0][1] = False

        for c in range(2, n):
            j = c - 1
            if p[j] == '*':
                dp[0][c] = dp[0][c - 2]
        
        for r in range(1,m):
            i = r - 1
            for c in range(1, n):
                j = c - 1
                if s[i] == p[j] or p[j] == '.':
                    dp[r][c] = dp[r - 1][c - 1]
                elif p[j] == '*':       # ‘*’前面的字符匹配s[i] 或者为'.'
                    if p[j - 1] == s[i] or p[j - 1] == '.':
                        dp[r][c] = dp[r - 1][c] or dp[r][c - 2]
                    else:                       # ‘*’匹配了0次前面的字符
                        dp[r][c] = dp[r][c - 2] 
                else:
                    dp[r][c] = False
        return dp[m - 1][n - 1]
```

