---
title: 面试题34. 二叉树中和为某一值的路径
date: 2020-08-16 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/c0c36d/
---

## 题目描述

> 做题链接：[剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
>

<!--more-->

## 解题思路

简单的DFS + 记录结点

不过这里需要注意的是 Python 的 List类型是默认传入的引用，故不能简单的通过 append 方法，把List类型的变量添加进最终的方案。

可以通过三种方法实现

-  利用 copy 函数，拷贝引用

   res.append(copy.copy(road))

- 利用切片

   res.append(road[:])

- 利用 List

  res.append(List(road))

## 代码

```python
import copy
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        def get_value(root, sum):
            if not root : 
                return
            if sum == 0 and not root.left and not root.right:
                # 以下三种方法可以任选一种加入 
                res.append(copy.copy(road))
                # res.append(road[:])
                # res.append(list(road)) 
                return 

            if root.left:
                road.append(root.left.val)
                get_value(root.left, sum - root.left.val)
                road.pop()
            if root.right:
                road.append(root.right.val)
                get_value(root.right, sum - root.right.val)
                road.pop()
            
        if not root: return []
        res = []
        road = [root.val]
        get_value(root, sum - root.val)
        return res
```
