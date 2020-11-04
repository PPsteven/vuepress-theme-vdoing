---
title: 面试题17. 打印从1到最大的n位数
date: 2020-08-13 15:53:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/d92d2e/
---

## 题目描述

> 做题链接： [面试题17. 打印从1到最大的n位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)
>

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999

<!--more-->

## 解题思路

### 方法一： 不推荐Python实现

Python的语言特性是可以存储大数的，显示其他语言，如C++，是无法c

 ```python
list(range(1, 10**n))
 ```



### 方法二： 模拟法

当数字太大的时候，无法存储，故使用字符串处理，这里可以重新写加一的操作



### 方法三：全排列

> 参考：[面试题17. 打印从 1 到最大的 n 位数（分治算法 / 全排列，清晰图解）](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/solution/mian-shi-ti-17-da-yin-cong-1-dao-zui-da-de-n-wei-2/)
>
> 时间复杂度  $O(10^n)$  空间复杂度 $O(1)$

 首先实现简单的实现  两个数字`0~9` 的全排列。可以通过 `递归` 去实现

 接下来，需要对 `全排列` 做一下优化，去除多余的 0 和 从1开始输出

  这样的改进，感觉就是修复逻辑漏洞一样，比较考察是否细心，这里就比较见仁见智了。这里我参考的是 [Krahets](https://leetcode-cn.com/u/jyd/) 给的解法。

## 代码

> 方法一：Python特殊写法

```python
list(range(1, 10**n))
```



> 方法二：递归实现模拟加一

```python
class Solution:
    def printNumbers(self, n: int) -> List[int]:
        def plus_one(s):
            if not s: return '1'
            if s[-1] != '9':
                return s[:-1] + chr(ord(s[-1]) + 1)
            return plus_one(s[:-1]) + '0' 
        x = '1'
        res = []
        while len(x) < n + 1:
            res.append(int(x))
            x = plus_one(x)
        return res 
```



> 方法三：全排列

```python
def printNumbers(self, n: int) -> [int]:
          def dfs(x):
              if x == n: # 终止条件：已固定完所有位
                  res.append(''.join(num)) # 拼接 num 并添加至 res 尾部
                  return
              for i in range(10): # 遍历 0 - 9
                  num[x] = str(i) # 固定第 x 位为 i
                  dfs(x + 1) # 开启固定第 x + 1 位
          
          num = ['0'] * n # 起始数字定义为 n 个 0 组成的字符列表
          res = [] # 数字字符串列表
          dfs(0) # 开启全排列递归
          return res
 if __name__ == "__main__":
      res = printNumbers(2)
      print(res)
  # output:  
  # ['00', '01', '02', '03', '04', '05', ...., '97', '98', '99']
```

优化去除多余的零

```python
class Solution:
      def printNumbers(self, n):
          def dfs(x):
              if x == n: # 这一步复杂筛选和生产数字序列
                  s = ''.join(self.num)[self.digit:] # '0001' => '1'
                  if s == '0': return # 只处理 ’0000‘ 全零的这一情况
                  if self.digit + self.nine == n : self.digit -= 1
                  self.res.append(s)
                  return 
              for i in range(10): # 这一步复杂生产 '00', '01', '02' 这样的序列 
                  if i == 9: self.nine += 1
                  self.num[x] = str(i)
                  dfs(x + 1)
          self.num = ['0'] * n
          self.digit = n - 1 # 代表是从最后一位开始
          self.nine = 0 # 记录是不是从 9
          self.res = []
          dfs(0)
          return self.res
```

