---
title: 面试题18. 删除链表的节点
date: 2020-08-14 16:53:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/1953c1/
---

## 题目描述

> 做题链接： [面试题18. 删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
>

给定一个链表，和一个值，返回删除给定值的头结点

<!--more-->

## 解题思路

### 方法一： 单指针删除节点

```python
# 删除 p.next 节点
p.next = p.next.next 
```

### 方法二： 双指针删除节点

```python
# 删除 cur 节点
pre.next = cur.next 
```

### 方法三：伪节点+双指针

因为头结点可能被删除，自然想到使用伪节点的方法

### 方法四：递归法（*思考）

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200814172044.png" style="zoom: 33%;" />

## 代码

> 方法一：单指针删除节点

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        """ 单指针法 """
        # 删除头结点
        if head.val == val: return head.next
        
        temp = head
        # 非头结点
        while temp and temp.next:
            if temp.next.val == val and temp.next:
                temp.next = temp.next.next
            temp = temp.next
        return head
```



> 方法二：双指针删除节点

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        """ 双指针法 """
        if head.val == val: return head.next # 如果正好是头结点
        pre, cur = head, head.next
        while cur:
            if cur.val == val:
                pre.next = cur.next
                return head
            pre, cur = pre.next, cur.next
```



> 方法三：伪节点 + 双指针

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if not head: return head # 套路语句
        dummpyHead = ListNode(None) # 伪节点
        dummpyHead.next = head 
        pre, cur = dummpyHead, head 
        while cur:
            if cur.val == val:
                pre.next = cur.next 
                break
            pre = pre.next 
            cur = cur.next
        return dummpyHead.next
```



> 方法四：递归

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if not head: return head # 没有找到节点
        if head.val == val: 
            return head.next 
        head.next = self.deleteNode(head.next, val)
        return head 
```

