#!/bin/sh

echo "start auth deploy!"
unset GIT_DIR 
#DIR_ONE=/root/docs/wxrc-docs  #此目录为linux文档服务目录,换项目记得改  
cd ${DIR_ONE}

git pull origin master

pm2 reload app  #pm2重启所有项目

echo "complete auth deploy"
