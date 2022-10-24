---
title: 面试题22. 链表中倒数第k个节点
date: 2020-08-15 11:28:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/d396a8/
---

## 题目描述

> 做题链接：[面试题22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)
>

<!--more-->

## 解题思路

本题，可以选择走两步查找，第一遍找链表的长度，第二编找第K个节点。也不会增加时间复杂度，故是一种常规的思路。有两种改进的方法，第一种是通过 `栈` 来空间换时间。第二种是 **Best Answer**，就是双指针法

### 方法一： 栈

> 时间复杂度 $O(n)$  空间复杂度 $O(n)$ 

栈的 LIFO 的性质很适合寻找倒数节点

### 方法二：双指针

设置两个指针: p1, p2

1. 让 `p1` 走 K 步
2. 让`p1`, `p2` 指针一起走，这样当`p1` 走完的时候，`p2` 走了n-k 步，正好指向倒数第二个节点

## 代码

> 方法一：栈

```python
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        arr = []
        while head:
            arr.append(head)
            head = head.next 
        return arr[-1*k]
```



> 方法二：双指针

```python
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        h1, h2 = head, head
        for _ in range(k): # h1 先走 k 步
            h1 = h1.next

        while h1: # h1 走完
            h1 = h1.next
            h2 = h2.next # 此时 h2 走了 n-k 步，即指向倒数第k个节点
        return h2
```


