# 教程

用git服务端钩子做自动部署
![avatar](./githooks.png)

网上的教程很坑，一直讲的是本地客户端push、触发本地钩子再本地pull最后本地部署，跟本地客户端push到Linux服务器pull部署是两码事，屏幕前盯着会懵逼。

几个步骤：
* 先可好bash命令，提供给web框架调用
* 用koa简单创建一个通用的hooks,请求地址采用{主机}/{服务}调用
* 将具体hook handler的url填进github项目的配置里，触发的事件是push。