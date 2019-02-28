const Service = require('egg').Service;

class HttpService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root =this.config.httpService.url;
  }

  async Invok(funNo,param) {
     let data = {
        "msg": {
            "cmdid": funNo,
        },
        "data": param || {}
    };
    data = JSON.stringify(data);
    this.ctx.logger.info(`${funNo}请求开始====`);
    // 调用 CNode V1 版本 API
    const result = await this.ctx.curl(this.root,{
      method: 'post',
      data,
      dataType: 'json',
      contentType: 'json',
      headers:{
        "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    // 检查调用是否成功，如果调用失败会抛出异常
    this.checkSuccess(result);
    // 返回创建的 topic 的 id
    return result.data;
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    this.ctx.logger.info(`请求结果====`);
    this.ctx.logger.info(result.data);
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = HttpService;