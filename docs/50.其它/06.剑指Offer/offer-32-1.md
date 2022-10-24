---
title: 面试题32 - I. 从上到下打印二叉树
date: 2020-08-16 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/c6057f/
---

## 题目描述

> 做题链接：[面试题32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)
>

<!--more-->

## 解题思路

层次遍历基础

## 代码

```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root : return []
        res, queue = [], collections.deque()
        queue.append(root)
        while queue:
            node = queue.popleft()
            res.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return res
```
