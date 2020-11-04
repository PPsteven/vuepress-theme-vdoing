module.exports = [
  {text: '首页', link: '/'},
  {
    text: '后端',
    link: '/backend/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '后端', items: [
        {text: 'Docker', link: '/pages/e7311f/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'MySQL', link: '/pages/fccc5c/'},
        {text: 'Linux', link: '/pages/46c53b/'},
        {text: 'Git', link: '/pages/fadef0/'},
      ]},
    ]
  },
  {
    text: '算法', 
    link: '/algorithm/',
    items: [
      {text: 'LeetCode', link: '/pages/db3414/'},
      {text: '剑指Offer', link: '/pages/bfb1e1/'},
    ]
  },
  {
    text: 'Python',
    link: '/python/',
    items: [
      {text: 'Python', items: [
        {text: 'Python', 'link': 'pages/a583c4/'},
      ]},
    ],
  },
  {
    text: 'CheetSheet',
    link: '/CheetSheet/',
    items: [
      {text: 'docker', link: '/pages/3f6ec3/'},
      {text: 'git', link: '/pages/752e0b/'},
    ]
  },
  {text: '环境配置', link: '/pages/1886cc/'},
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '其它',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: 'PHP', link: '/pages/e9dfa9/'},
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
