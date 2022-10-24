---
title: 面试题21. 调整数组顺序使奇数位于偶数前面
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/da4b9e/
---

## 题目描述

> 做题链接：[面试题21. 调整数组顺序使奇数位于偶数前面](https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)
>

[1,2,3,4] => [1,3,2,4] or [3,1,4,2] ...只要奇数始终在偶数前面就可以

<!--more-->

## 解题思路

### 方法一： 快排思想

 本题没有强调奇偶数字的相对位置，发现可以使用快速排序的思想处理

 主要变动的是在判断的依据上

  > 时间复杂度 $O(n)$   空间复杂度 $O(1)$

### 方法二：首尾指针

令左指针记录，奇数的位置。右指针去检查奇偶，一旦找到和左边的指针交换。

因为初始状态下，没有找到奇数，故left 指针的初始为 -1

- 右边找到奇数: left + 1，交换两端节点
- 右边找到偶数: right - 1

当左右指针相遇的时候，就没有必要移动了。

### 方法三：复制数组

> 时间复杂度 $O(n)$   空间复杂度 $O(n)$

辅助数组仅仅是用来寄存奇数数字，对于此类简单题，可能没有必要。在一些难题中是一个不错的思路



## 代码

> 方法一：快速排序

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        if not nums: return []
        left = 0
        right = len(nums) - 1 
        temp = nums[left]
        while left < right:
            while left < right and nums[right] % 2 == 0:
                right -= 1
            nums[left] = nums[right]

            while left < right and nums[left] % 2 == 1:
                left += 1
            nums[right] = nums[left]
        nums[right] = temp
        return nums
```



> 方法一：快速排序

这里，大神给了一个更加简洁的版本

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/solution/mian-shi-ti-21-diao-zheng-shu-zu-shun-xu-shi-qi-4/

class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        i, j = 0, len(nums) - 1
        while i < j:
            while i < j and nums[i] & 1 == 1: i += 1
            while i < j and nums[j] & 1 == 0: j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        return nums
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



> 方法二：首尾双指针

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        # 首尾双指针
        i, j, size = -1, -1, len(nums)
        while i < size - 1: 
             i += 1
             if nums[i] & 1 == 1: # 找到奇数
                j += 1
                nums[i], nums[j] = nums[j], nums[i]
        return nums
```



> 方法三：辅助数组

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        num1, num2 = [], []
        for n in nums:
            if n & 1: num1.append(n)
            else: num2.append(n)
        del nums  # 主动释放内存
        return num1 + num2
```

