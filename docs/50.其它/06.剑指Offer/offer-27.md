---
title: 面试题27. 二叉树的镜像
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/e14b74/
---

## 题目描述

> 做题链接：[面试题27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)
>

<!--more-->

## 解题思路

简单的 二叉树遍历 的题目

## 代码

> 代码一： 先序遍历

```python
class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root: return True
        root.left, root.right = root.right, root.left
        self.mirrorTree(root.left)
        self.mirrorTree(root.right)
        return root
```



> 代码二： 后序遍历

```python
class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root: return root 
        left, right = self.mirrorTree(root.left), self.mirrorTree(root.right)
        root.left, root.right = right, left 
        return root
```

