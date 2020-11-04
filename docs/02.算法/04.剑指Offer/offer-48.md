---
title: 面试题48. 最长不含重复字符的子字符串
date: 2020-08-20 18:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/dc6c2e/
---

## 题目描述

> 做题链接：[面试题48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

**输入**: "abcabcbb"
**输出**: 3 
**解释**: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


<!--more-->

## 解题思路&代码

### 方法一：双指针 + 辅助数组记录字符有无出现

> 参考 [这个图文教程](https://mp.weixin.qq.com/s/rm_Pqy7Mj3KTq2Dmk32ERA)

​    建立一个256位大小的整型数组freg，用来建立字符和其出现位置之间的映射。

​    维护一个滑动窗口，窗口内的都是没有重复的字符，去尽可能的扩大窗口的大小，窗口不停的向右滑动。

- （1）如果当前遍历到的字符从未出现过，那么直接扩大右边界；
- （2）如果当前遍历到的字符出现过，则缩小窗口（左边索引向右移动），然后继续观察当前遍历到的字符；
- （3）重复（1）（2），直到左边索引无法再移动；
- （4）维护一个结果res，每次用出现过的窗口大小来更新结果res，最后返回res获取结果。

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        visited, res = {}, 0
        for char in set(s):
            visited[char] = 0
        l, r = 0, -1
        while l < len(s):
            if r + 1 < len(s) and visited[s[r + 1]] == 0:
                r += 1
                visited[s[r]] = 1
            else:
                visited[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        return res 
```

### 方法二： 双指针 + 不适用辅助数组

使用辅助数组就是为了判断，字符串是否在待选字符中。使用字符串的切片也可以实现。

如 字符串的索引范围为 [l, r)，r是字符串右侧的索引号。故使用 `s[r] in s[l:r]`就可以判断，是否第r位的字符在待选字符串中。

此外，左指针右移的标准是只要当前遍历到的字符出现过，就不停的右移。如 'abcc' 的右移轨迹为

'abcc' => 'bcc' => 'cc' => 'c'，这里使用 while 循环一直右移，代码如下。

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l, r = 0, 0
        res = 0
        while r < len(s):
            if s[r] not in s[l: r]:
                r += 1
            else:
                while s[r] in s[l: r]:
                    l += 1
            res = max(res, r - l)
        return res 
```



### 方法三：动态规划

> 参考资料： [Krahets](https://leetcode-cn.com/u/jyd/) 面试题48. 最长不含重复字符的子字符串（动态规划 / 双指针 + 哈希表，清晰图解）

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200712005837.png" style="zoom: 50%;" />

直接翻译大佬的 DP 方程，代码如下

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        """ 动态规划方程直接翻译 500ms """
        if not s: return 0 
        dp = [0] * len(s)
        dp[0] = 1
        for i in range(1, len(s)):
            j = i - 1
            while j >= 0 and s[j] != s[i]: j -= 1
            if j == -1: # 全部都是新元素
                dp[i] = dp[i - 1] + 1
            elif dp[i - 1] >= i - j: # 证明 没有新的元素出现
                dp[i] = i - j
            else: # 存在新的元素出现，范围应该扩大
                dp[i] = dp[i - 1] + 1
        return max(dp)
```



### 方法四：【动态规划】 + 【哈希表】

通过直接翻译动态规划的方程，可以发现 `while j >= 0 and s[j] != s[i]: j -= 1` 存在大量查找，实际算法效果并不是很理想。

解决方法是，直接存储对应元素的最靠左的位置

```python
 def lengthOfLongestSubstring(self, s: str) -> int:
        """
        dp 动态规范方程翻译, 哈希表改进 63ms
        """
        if not s: return 0
        dp = [0] * len(s)
        dp[0] = 1 # d[i] 代表以 s[i] 结尾的最小子字符串的长度
        dic = {}
        dic[s[0]] = 0
        for i in range(1, len(s)):
           j = dic.get(s[i], -1)
           dic[s[i]] = i
           dp[i] = dp[i - 1] + 1 if dp[i - 1] < i - j else i - j
           
        return max(dp)
```