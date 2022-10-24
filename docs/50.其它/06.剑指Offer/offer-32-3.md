---
title: 面试题32 - III. 从上到下打印二叉树 III
date: 2020-08-16 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/d25784/
---

## 题目描述

> 做题链接：[面试题32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)
>

<!--more-->

## 解题思路

> 参考：[面试题32 - III. 从上到下打印二叉树 III（层序遍历 BFS / 双端队列，清晰图解）](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/solution/mian-shi-ti-32-iii-cong-shang-dao-xia-da-yin-er--3/) 

### 方法一：层次遍历 + 双端队列

即使用 collections.deque() 的方式，从左和右两个方向入队

在奇偶层节点加入上，奇数层从左端加入，偶数层在右端加入 

```python
temp.appendleft()
temp.append()
```
### 方法二：层次遍历 + 奇偶逻辑分开（略）

在出队的时候，奇数层从左端出队，偶数层从右端出队

```python
queue.popleft()
queue.pop()
```
### 方法三：仅对 `面试题32-II` 的顺序进行调整 （略）

## 代码

> 代码一：层次遍历 + 双端队列

```python
 class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          queue = collections.deque()
          queue.append(root)
          res = []
          while queue:
              temp = collections.deque()
              for _ in range(len(queue)):
                  node = queue.popleft()
                  if len(res) & 1 == 0: temp.append(node.val)
                  else: temp.appendleft(node.val)
                  if node.left: queue.append(node.left)
                  if node.right: queue.append(node.right)
              res.append(list(temp))
          return res
```
