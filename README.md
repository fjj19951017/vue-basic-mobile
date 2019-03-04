# vue-basic-mobile

基本与vue-cli2的官方模板相同，应该都看得懂

## 特点

1. 对比vue官方模板，额外配置了axios、less、qs和babel-polyfill
2. 已配置资源地址、接口地址和七牛服务器地址
3. 已配置微信分享
4. 打包后自动上传cdn

## 命令

开发环境:  

```bash
npm run dev
```

测试环境打包:  

```bash
npm run sit
```

生产环境打包:  

```bash
npm run build
```

测试环境打包并上传cdn(跑这条命令记得连内网不然上传不了):  

```bash
npm run deploy
```

## 环境变量

环境变量暴露在了config/index.js中的dev.var, sit.var以及build.var, 内置NODE_ENV, 用于判断坏境  

```javascript
process.env.NODE_ENV
```

+ 开发: development
+ 测试: testing
+ 生产: production

## 常见问题

Q: 生产环境如何自动上传?  
A: 为了防止输错命令直接覆盖生产资源, 生产环境还是自己手动上传  
  
Q: html在cdn中, 调用后端接口, 浏览器提示跨域?
A: 修改nginx配置, 将cdn域名加入cors白名单

Q: 如何手机调试
A: 把config/index.js中的dev.host改成本机ip即可