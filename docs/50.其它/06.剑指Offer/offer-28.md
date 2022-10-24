---
title: 面试题28. 对称的二叉树
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/5501d6/
---

## 题目描述

> 做题链接：[面试题28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)
>

<!--more-->

## 解题思路

### 方法一：递归

方法二：层次遍历

通过层次遍历，把二叉树转化为分层结构，然后再比较即可。空间复杂度较高，并不属于最优的解法

```python
# 举例
[1,2,2,3,4,4,3]  => 

[

	[1],
	[2,2],
	[3,4,4,3]

]
```

## 代码

> 代码一： 递归

```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def compareTwoTree(A, B):
            if not A and not B: return True # 都是 null 节点
            if not A or not B: return False # 有一边是 null 节点，保证后续条件运行
            if A.val != B.val: return False 
            return compareTwoTree(A.left, B.right) and compareTwoTree(A.right, B.left)
            
        if not root: return True 
        return compareTwoTree(root.left, root.right)
```



> 代码一： 递归2

当然，我们也可以不单独考虑 `if not A or not B: return False` 这种情况

```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def compareTwoTree(A, B):
            if not A and not B: return True # 都是 null 节点
            if A and B and A.val == B.val and compareTwoTree(A.left, B.right) and compareTwoTree(A.right, B.left): 
                return True 
            return False 
            
        if not root: return True 
        return compareTwoTree(root.left, root.right)
```

> 代码一： 递归3 

通过之前学的 bool(A, B) 可以进一步简化代码

```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def compareTwoTree(A, B):
            if not A and not B: return True # 都是 null 节点
           
            return bool(A and B) and (A.val == B.val) and \
                   compareTwoTree(A.left, B.right) and \
                   compareTwoTree(A.right, B.left)
            
        if not root: return True 
        return compareTwoTree(root.left, root.right)
```



> 代码二：层级遍历

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root: return True 
        queue, res = collections.deque(), []
        queue.append(root)
        while queue:
            _res = []
            for _ in range(len(queue)):
                temp = queue.popleft()
                if temp.left: 
                    queue.append(temp.left)
                    _res.append(temp.left.val)
                else:
                    _res.append(None)

                if temp.right: 
                    queue.append(temp.right)
                    _res.append(temp.right.val)
                else:
                    _res.append(None)
                
            res.append(_res)
        for _res in res:
            if _res != _res[::-1]: return False # 比较
        return True 
```

