module.exports = [
  {text: '首页', link: '/'},
  {
    text: '技术笔记',
    link: '/computer-notes/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '后端', items: [
        {text: 'Docker', link: '/pages/e7311f/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'MySQL', link: '/pages/fccc5c/'},
        {text: 'Linux', link: '/pages/46c53b/'},
        {text: 'Git', link: '/pages/fadef0/'},
      ]},
      {
        text: '运维', 
        link: '/pages/1886cc/',
      },
    ]
  },
  {
    text: '数据结构与算法', 
    link: '/algorithm/',
    items: [
      {text: '算法', items: [
        {text: '贪心算法', link: '/pages/b248c0/'},
        {text: '双指针与滑动窗口', link: '/pages/9410cd/'},
        {text: '二分查找', link: '/pages/025a96/'},
        {text: '排序算法', link: '/pages/bdcb28/'},
        {text: '搜索算法', link: '/pages/ec8860/'},
        {text: '动态规划', link: '/pages/0009c5/'},
        {text: '系列问题', link: '/pages/5eba5e/'},
       ]},
      {text: '数据结构', items: [
        {text: '链表', link: '/pages/c5378b/'},
        {text: '树', link: '/pages/2723b5/'},
        {text: '栈和队列', link: '/pages/83762d/'},
        {text: '并查集', link: '/pages/72acfe/'},
      ]},
    ]
  },
  {
    text: '计算机基础知识',
    items: [
      {
        text: '计算机网络', items: [
          {text: '《图解HTTP》笔记', link: '/pages/c9e990/'}
        ],
      }
    ]
  },
  {
    text: 'CheetSheet',
    link: '/CheetSheet/',
  },
  {text: '关于', link: '/about/'},
  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  //   items: [
  //     {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
  //     {text: '资源', link: '/pages/eee83a9211a70f9d/'},
  //     {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
  //   ]
  // },
  {
    text: '其它',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: 'Hexo', link: '/pages/8e768d/'},
      {text: '转载文章', link: '/pages/d6fe55/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
