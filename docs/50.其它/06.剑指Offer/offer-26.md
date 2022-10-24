---
title: 面试题26. 树的子结构
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/240d5d/
---

## 题目描述

> 做题链接：[面试题26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)
>

<!--more-->

## 解题思路

本题很显然，使用 DFS 算法。

当然我们要注意，当 `val` 的值相等的时候，不仅仅要去做判断，还要递归看是否存在子树中

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200815161717.jpeg" style="zoom: 50%;" />

## 代码

> 代码：DFS 

```python
class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def check(A, B):
            if not B: return True
            if not A: return False
            if A.val != B.val: return False
            return check(A.left, B.left) and check(A.right, B.right)
        
        def recur(A, B):
            if not B: return True # 判断子树中，空子树是认为True的
            if A and B:
                if (A.val == B.val) and check(A, B): # 如果是节点相等的话，就去判断是否是子树
                    return True 
                return recur(A.left, B) or recur(A.right, B) # 不相等的话，递归检查是否位于左右子树中
            return False
        if not B: return False # 符合题意
        return recur(A, B)
```



> 大神代码

- 在  return 中，加入`bool(A and B)` 来代替 `if not A and not B: return False ` ，显得更加简洁

```python
class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def recur(A, B):
            if not B: return True
            if not A or A.val != B.val: return False
            return recur(A.left, B.left) and recur(A.right, B.right)

        return bool(A and B) and (recur(A, B) or self.isSubStructure(A.left, B) or self.isSubStructure(A.right, B))

# 作者：jyd
# 链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
```

