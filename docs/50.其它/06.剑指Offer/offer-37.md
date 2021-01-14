---
title: 面试题37. 序列化二叉树【困难】
date: 2020-08-16 20:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/3bc9a5/
---

## 题目描述

> 做题链接：[面试题37. 序列化二叉树【困难】](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)

按照LeetCode的生成规则生成并解析二叉树

<!--more-->

## 解题思路

**序列化的部分**

我们之前已经在 [面试题 28.对称的二叉树](/2020/08/15/剑指Offer合集/offer-28/) 中利用了层次遍历的方式去验证，这里也是一样的方法，就是把 null 值也一起记录下来，但是不同的是，我们最后一行的 null 值就不要记录了，这里直接用 level 去筛选就可以了。

包含 null 值的二叉树可以看做 `完全二叉树` ，而完全二叉树的节点个数是 $2 \times level - 1$

**反序列化的部分**

用层次遍历的方式生成

## 代码

```python
import collections

class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root: return "[]"
        res, queue = [], collections.deque()
        queue.append(root)
        level = 0
        while queue:
            level += 1
            for _ in range(len(queue)):
                node = queue.popleft()
                if node:
                   res.append(node.val)
                   queue.append(node.left)
                   queue.append(node.right)
                else:
                   res.append("null")
            
        res = res[:2**level - 1]  # 把最后的 null 值过滤掉
        return "[" + ",".join([str(_) for _ in res]) + "]"
             
            
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if data == "[]": return None
        vals, i = data[1:-1].split(','), 1
        root = TreeNode(int(vals[0])) 
        queue = collections.deque()
        queue.append(root)
        while queue and i < len(vals):
            node = queue.popleft()
            if vals[i] != "null":
                 node.left = TreeNode(int(vals[i]))
                 queue.append(node.left)
            i += 1
            if vals[i] != "null":
                 node.right = TreeNode(int(vals[i]))
                 queue.append(node.right)
            i += 1
        return root
```
