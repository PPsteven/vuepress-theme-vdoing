---
title: 面试题36. 二叉搜索树与双向链表
date: 2020-08-16 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/ea63af/
---

## 题目描述

> 做题链接：[面试题36. 二叉搜索树与双向链表【困难】](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

将二叉搜索树转化为双向链表的结构，最终形成的是有序的链表

<!--more-->

## 解题思路

### 方法一：中序遍历 + 辅助队列

中序遍历的二叉搜索树一定是有序的链表，可以先将节点存储起来，最后处理。

> 时间复杂度 $O(n)$ 空间复杂度$O(n)$

### 方法二： 中序遍历

上述方法虽然简单，但是借助了 `辅助队列` ，可以利用双指针改进

利用 head 指针记录头结点，pre 指针记录前一节点。这两个指针都可以看做是全局变量。

## 代码

> 方法一：中序遍历 + 辅助队列

```python
  class Solution:
      def treeToDoublyList(self, root: 'Node') -> 'Node':
          def dfs(cur): # 中序遍历
              if not cur: return []
              dfs(cur.left) # 左
              res.append(cur) # 中
              dfs(cur.right) # 右
  
          if not root: return None
          res = []
          dfs(root)
          # 根据 队列，前后链接链表
          for i in range(0, len(res) - 1):
              res[i].right = res[i + 1]
              res[i+1].left = res[i]
          # 头尾特殊处理
          res[0].left = res[-1] 
          res[-1].right = res[0]
          return res[0]
```



> 代码二：中序遍历 + 双端队列

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/mian-shi-ti-36-er-cha-sou-suo-shu-yu-shuang-xian-5/

class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        def dfs(cur):
            if not cur: return
            dfs(cur.left) # 递归左子树
            if self.pre: # 修改节点引用
                self.pre.right, cur.left = cur, self.pre
            else: # 记录头节点
                self.head = cur
            self.pre = cur # 保存 cur
            dfs(cur.right) # 递归右子树
        
        if not root: return
        self.pre = None
        dfs(root)
        self.head.left, self.pre.right = self.pre, self.head
        return self.head
```

