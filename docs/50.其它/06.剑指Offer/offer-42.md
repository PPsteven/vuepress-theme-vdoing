---
title: 面试题42. 连续子数组的最大和
date: 2020-08-17 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/3081c4/
---

## 题目描述

> 做题链接：[面试题42. 连续子数组的最大和](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)

<!--more-->

## 解题思路

> 参考[Krahets](https://leetcode-cn.com/u/jyd/) 的 [方法总结](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/mian-shi-ti-42-lian-xu-zi-shu-zu-de-zui-da-he-do-2/)

| 常见解法 | 时间复杂度 | 空间复杂度 |
| -------- | ---------- | ---------- |
| 暴力搜索 | $O(N^2)$   | $O(1)$     |
| 分治思想 | $O(NlogN)$ | $O(logN)$  |
| 动态规划 | $O(N)$     | $O(1)$     |
| 剪枝法   | $O(N)$     | $O(1)$     |

### 方法一：暴力+剪枝

只需要保证求出的 sum 始终大于 0 即可，若是小于0，完全可以直接丢弃。

> 本质算是暴力法的剪枝，这种剪枝巧妙的利用了规律

### 方法二：动态规划

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200710162955.png" style="zoom:50%;" />

### 方法三：分治法

> 参考资料：
>
> [最大子序和（暴力法 + 分治法 + DP）- Python3](https://leetcode-cn.com/problems/maximum-subarray/solution/bao-li-qiu-jie-by-pandawakaka/)
>
> [【超全·4种解法】动态规划及优化、贪心法、分治法（JavaScript实现）](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/chao-quan-4zhong-jie-fa-dong-tai-gui-hua-ji-you-hu/)

- 将数组分为 2 部分。例如 [1, 2, 3, 4] 被分为 [1, 2] 和 [3, 4]
  - 通过递归计算，得到左右两部分的最大子序列和是 lsum，rsum
  - 从数组中间开始向两边计算最大子序列和 cross
  - 返回 max(lsum, cross, rsum)

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200710162955.png" style="zoom:50%;" />

  **Tips:**

  - 由于 `len(nums)==1` 保证了 `mid=len(nums)//2 - 1` 和 `mid - 1` 是存在的
  - 中间值计算一定是从 mid 开始的连续值

## 代码

> 代码一：暴力 + 剪枝

```python
# 64ms
class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    s, ret = 0, -101
    for i in nums:
      if s < 0: s = 0
        s += i
        ret = max(ret, s)
        return ret 
```

> 代码二：动态规划

jyd 在处理的时候，直接在 nums 基础上进行了运算，节约了 $O(N)$ 的空间使用，非常精妙

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] += max(nums[i - 1], 0)
        return max(nums)

# 作者：jyd
# 链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/mian-shi-ti-42-lian-xu-zi-shu-zu-de-zui-da-he-do-2/
```

> 代码三：分治算法

并不算最优，可以当做分治算法的一种学习

```python
# 544 ms
  class Solution:
      def maxSubArray(self, nums: List[int]) -> int:
          def crossSum(nums):
              mid = len(nums) // 2 - 1 
              left_max_sum, left_sum = nums[mid], 0
              for i in nums[mid: : -1]:
                  left_sum += i
                  left_max_sum = max(left_max_sum, left_sum)
              
              right_max_sum, right_sum = nums[mid + 1], 0 
              for i in nums[mid + 1: : 1]:
                  right_sum += i
                  right_max_sum = max(right_max_sum, right_sum)
              return left_max_sum + right_max_sum
  
          if len(nums) == 1: 
              return nums[0]
          mid = len(nums) >> 1
          left_max = self.maxSubArray(nums[:mid])
          right_max = self.maxSubArray(nums[mid:])
          mid_max = crossSum(nums)
          return max(left_max, right_max, mid_max)
```
