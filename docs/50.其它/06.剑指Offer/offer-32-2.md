---
title: 面试题32 - II. 从上到下打印二叉树 II
date: 2020-08-16 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/976735/
---

## 题目描述

> 做题链接：[面试题32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)
>

<!--more-->

## 解题思路

层次遍历升级

### 方法一：通过标记层号解决

### 方法二：通过queue的长度来区分层

queue 的长度本身就代表了层的长度，故可以用来区分

## 代码

> 代码一：通过标记层号解决

```python
class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          res, queue = [], collections.deque()
          queue.append((root, 0))
          while queue:
              node, level = queue.popleft()
              if level > len(res) - 1: res.append([])
              res[level].append(node.val)
              if node.left: queue.append((node.left, level + 1))
              if node.right: queue.append((node.right, level + 1))
          return res
```



> 代码二：通过queue的长度来区分层

```python
class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          res, queue = [], collections.deque()
          queue.append(root)
          while queue:
              _res = []
              for _ in range(len(queue)):
                  node = queue.popleft()
                  _res.append(node.val)
                  if node.left: queue.append(node.left)
                  if node.right: queue.append(node.right)
              res.append(_res)
          return res
```

