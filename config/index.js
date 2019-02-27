module.exports = {
    dev: {
        // 根据环境自定义全局变量，通过process.env['自定义的变量']来调用
        var: {
            NODE_ENV: '"development"'
        },
        host: "localhost",
        //前端端口
        FEPort: "{{FEPort}}",
        //后端端口
        BEPort: "{{BEPort}}",
        //是否使用dev-server代理跨域
        useProxy: true,
        //后端接口地址
        httpPath: dev.useProxy ? `http://${dev.host}:${dev.FEPort}/api/` : `http://${dev.host}:${dev.BEPort}`
    },
    sit: {
        var: {
            NODE_ENV: '"testing"'
        },
        //资源路径(cdn)
        PublicPath: "{{sitPublicPath}}",
        //后端服务器地址
        httpPath: "{{sitHttpPath}}"
    },
    build: {
        var: {
            NODE_ENV: '"production"'
        },
        PublicPath: "{{prdPublicPath}}",
        httpPath: "{{prdhttpPath}}"
    }
}