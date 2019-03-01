# vue-basic-mobile

基本与vue-cli2的官方模板相同，应该都看得懂

## 特点

1. 对比vue官方模板，额外配置了axios、less、qs和babel-polyfill
2. 自带loading、toast、alert插件，用法`this.$loading.show(); this.$loading.close();`，以此类推
3. 已配置资源地址、接口地址和七牛服务器地址
4. 已配置微信分享
5. 打包后自动上传cdn

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

+ 开发: development
+ 测试: testing
+ 生产: production
