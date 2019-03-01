/**
 * http配置
 */
import axios from 'axios';
import config from '../config';

// 配置超时
axios.defaults.timeout = 30000;

// 配置baseUrl
switch (process.env.NODE_ENV) {
    case 'development':
        axios.defaults.baseURL = config.dev.httpPath;
        break;
    case 'testing':
        axios.defaults.baseURL = config.sit.httpPath;
        break;
    case 'production':
        axios.defaults.baseURL = config.build.httpPath;
        break;
    default: ;
}

//拦截请求
axios.interceptors.request.use(config => {
        //...
        return config;
    }, error => {
        //...
        return Promise.reject(error);
    }
);

//拦截响应
axios.interceptors.response.use(
    response => {
        //...
        return response;
    },
    error => {
        //...
        return Promise.reject(error);
    }
);

export default axios;