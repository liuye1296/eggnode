'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537410342183_5710';

  // add your config here
  config.middleware = [];
  config.view = {
    defaultViewEngine: '.ejs',
    mapping: {
      '.ejs': 'ejs',
    },
  };
  config.static = {
     //maxAge: 31536000,
     prefix:'/'
  };
  config.notfound={
    pageUrl: './404.html',
  };
  config.onerror={
    errorPageUrl: './50x.html'
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'xxxx',
      // 端口号
      port: '3306',
      // 用户名
      user: 'xxx',
      // 密码
      password: 'xxxx',
      // 数据库名
      database: 'xxx',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cluster = {
    listen: {
      port: 8003,
      hostname: '127.0.0.1',
    }
  };
  config.httpService = {
    url:'http://xxxx.do'
  };
  return config;
};


