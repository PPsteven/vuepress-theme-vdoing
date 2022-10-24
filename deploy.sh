#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
github_url_addr=git@github.com:PPsteven/PPsteven.github.io.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd $dist_path

# deploy to ppsteven.github.io

# echo 'blog.majutsushi.world' > CNAME
# if [ -z "$GITHUB_TOKEN" ]; then
  # msg='deploy'
  # githubUrl=git@github.com:PPsteven/vuepress-theme-vdoing.git
# else
  # msg='来自github actions的自动部署'
  # githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/xugaoyi/vuepress-theme-vdoing.git
  # git config --global user.name "xugaoyi"
  # git config --global user.email "894072666@qq.com"
# fi

git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $github_url_addr master

# deploy to github.io
# if [ -z "$GITHUB_TOKEN" ]; then
  # msg='deploy'
  # githubUrl=git@github.com:PPsteven/PPsteven.github.io.git
# else
  # msg='来自github actions的自动部署'
  # githubUrl=https://ppsteven:${GITHUB_TOKEN}@github.com/ppsteven/vuepress-theme-vdoing.git
  # git config --global user.name "ppsteven"
  # git config --global user.email "ppsteven@outlook.com"
# fi

# git init
# git add -A
# git commit -m "${msg}"
# git push -f $githubUrl master # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
