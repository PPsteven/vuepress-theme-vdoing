---
title: 面试题33. 二叉搜索树的后序遍历序列
date: 2020-08-16 16:15:00
tags: 
  - 剑指Offer
categories: 剑指Offer
keywords: null
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png
permalink: /pages/36e0d6/
---

## 题目描述

> 做题链接：[面试题33. 二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)
>

<!--more-->

## 解题思路

> 参考：[面试题33. 二叉搜索树的后序遍历序列（递归分治 / 单调栈，清晰图解）](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/)

### 递归实现

判断当前根是否存在错误 ，即 `是否符合  左 < 根 < 右`
- `self.verifyPostorder(postorder[: m])` 判断左子树是否正确
- `self.verifyPostorder(postorder[m : -1])` 判断右子树是否正确

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200707205301.png" style="zoom:50%;" />

我们对于二叉树的结构一无所知，除了知道最后一个点一定是根节点，故一定是从最后一个结点出发作为判断。

然后逐步递归实现

## 代码

```python
class Solution:
      def verifyPostorder(self, postorder: List[int]) -> bool:
          if not postorder: return True
          # 判断是否符合 左<根<右
          root = postorder[-1]	
          for i in range(len(postorder)):
              if postorder[i] > root: break
          m = i # m 为右子树的第一个元素
          for i in range(m, len(postorder) - 1):
              if postorder[i] < root: return False # 右子树出现了比根节点小的节点。
          
          return self.verifyPostorder(postorder[: m]) and \
                 self.verifyPostorder(postorder[m : -1])
```
