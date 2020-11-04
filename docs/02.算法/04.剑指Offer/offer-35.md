---
title: 面试题35. 复杂链表的复制
date: 2020-08-16 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/3bb2fb/
---

## 题目描述

> 做题链接：[面试题35. 复杂链表的复制](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/)
>

<!--more-->

## 解题思路

### 方法一：哈希表

直接通过 `哈希表` 去存储对应节点的地址。创建 `new` 和 `old` 两个节点。old 节点和 new 节点同步访问。对于所有的节点，只访问一次。再次访问的时候，直接返回的是哈希表中存储的地址。

### 方法二：遍历搜索 + 哈希表

- DFS 
- BFS 

## 代码

> 方法一： 哈希表

```python
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        def copy(node):
            if not node: return node
            if node in visited:
                return visited[node]
            else:
                visited[node] = Node(node.val)
                return visited[node]
        
        if not head: return None
        visited = {}
        old = head 
        new = Node(head.val)
        visited[old] = new
        
        while old:
            new.next = copy(old.next)
            new.random = copy(old.random)
            new = new.next
            old = old.next
        return visited[head]
```



> 代码二：DFS

```python
# 作者：z1m
  # 链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/lian-biao-de-shen-kao-bei-by-z1m/
  
  class Solution:
      def copyRandomList(self, head: 'Node') -> 'Node':
          def dfs(head):
              if not head: return None
              if head in visited:
                  return visited[head]
              # 创建新结点
              copy = Node(head.val, None, None)
              visited[head] = copy
              copy.next = dfs(head.next)
              copy.random = dfs(head.random)
              return copy
          visited = {}
          return dfs(head)
```



> 代码二：BFS

```python
class Solution:
      def copyRandomList(self, head: 'Node') -> 'Node':
          visited = {}
      
          def bfs(head):
              if not head: return head
              clone = Node(head.val, None, None) # 创建新结点
              queue = collections.deque()
              queue.append(head)
              visited[head] = clone
              while queue:
                  tmp = queue.pop()
                  if tmp.next and tmp.next not in visited:
                      visited[tmp.next] = Node(tmp.next.val, [], [])
                      queue.append(tmp.next)  
                  if tmp.random and tmp.random not in visited:
                      visited[tmp.random] = Node(tmp.random.val, [], [])
                      queue.append(tmp.random)
                  visited[tmp].next = visited.get(tmp.next)
                  visited[tmp].random = visited.get(tmp.random)
              return clone
          return bfs(head)
```

