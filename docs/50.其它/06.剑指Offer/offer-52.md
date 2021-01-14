---
title: 面试题52. 两个链表的第一个公共节点
date: 2020-08-20 18:18:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/fd6930/
---

## 题目描述

> 做题链接：[面试题52. 两个链表的第一个公共节点](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

<!--more-->

## 解题思路

### 方法一：哈希表

> 空间复杂度 $O(N)$ 不满足 $O(1)$ 的条件

最容易想到的一个想法，首先A先走一遍，把所有节点记录在哈希表里。然后B走一遍，看看公共节点。

### 方法二：双指针法

此类问题，首先考虑的是 `双指针法` ，同本节 [面试题22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) 类似

其实总结起来就是：起点虽然不一样，但路程一样，终点一样,速度一样，必定同时到达！其中，路程是构思的关键点。

```python
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node1, node2 = headA, headB
        while node1 != node2:
            node1 = node1.next if node1 else headB
            node2 = node2.next if node2 else headA
        return node1
```

## 代码

> 代码一：哈希表

```python
class Solution:
    """ 哈希表, 但是不满足空间 O(N) 要求 """
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        hash_table = set()
        while headA:
            hash_table.add(headA)
            headA = headA.next
        while headB:
            if headB in hash_table: return headB
            else: headB = headB.next
```

> 代码二：双指针法

```python
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node1, node2 = headA, headB
        while node1 != node2:
            node1 = node1.next if node1 else headB
            node2 = node2.next if node2 else headA
        return node1
```

- 看到 `while node1 != node2` 会不会产生死循环？

  不会的。原因是，最后node1，node2 的路程是一样的。最后一定是同时为null