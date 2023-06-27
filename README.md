#
地址：https://kuaijieai.up.railway.app/index.html
## 简介
> 工单管理系统，基于[vue](https://cn.vuejs.org/)、[element](http://element-cn.eleme.io/#/zh-CN)搭建的后台管理平台。
> 考虑到后台管理一般是在电脑端查看，因此本项目没有实现移动端的适配。

## 准备
你需要在本地安装[node]()。本项目技术栈基于[ES6](http://es6.ruanyifeng.com/)、
[vue](https://cn.vuejs.org/index.html)、[vue-router](https://router.vuejs.org/zh-cn/)、
[axios](https://github.com/axios/axios)和[element-ui](http://element-cn.eleme.io/#/zh-CN/)，
所有的请求数据都使用[Mock.js](http://mockjs.com/)模拟

## 功能
```
- 登录
 - 登录 / 注册 / 注销
 - 自动登录
 - 密码加密

- 权限验证
  - 页面权限
  - 指令权限

- 全局功能
  - 国际化多语言
  - 自定义主题
  - 本地mock数据
  - 侧边栏无限菜单
  - 收缩侧边栏
  - 请求错误自动处理

- 功能页面
  - 工单编辑
  - 工单详情提取
  - 图表
  - 权限设置
  - 错误页面


```

## 构建
进入项目目录
``` bash
cd llplatform
```
### 安装依赖
```
npm install
```

### 运行
```
npm run serve
```

### 构建资源
```
npm run build
```

