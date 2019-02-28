'use strict';

const Controller = require('egg').Controller;
const mobile = 'mobile/';
class HomeController extends Controller {
  async index(ctx) {
    const data = await ctx.service.index.selectAdvisory({ page_num: 1, page_size: 6 });
    const foot = await ctx.service.index.selectFriendlyLinks();
    data.foot = foot.foot;
    await ctx.render('index.ejs', data);
    //ctx.set('cache-control', 'public, max-age=31536000');
  };
  //爱售宝
  async isales(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('isales.ejs', foot)
  };
  //集客神器
  async jq(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('jq.ejs', foot)
  };
  //使用申请
  async offer_sy(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('offer_sy.ejs', foot)
  };
  //网站地图
  async sitemap(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('sitemap.ejs', foot)
  };
  //文章资讯详情
  async consultingxq(ctx) {//需要调用接口
    let ctx_query = ctx.query, data = {};
    if (ctx_query.id) {
      data = await ctx.service.index.selectAdvisoryById(ctx_query.id)
    } else {
      data.success = false;
    }
    const foot = await ctx.service.index.selectFriendlyLinks();
    data.foot = foot.foot;
    await ctx.render('consultingxq.ejs', data)
  };
  //文章资讯列表
  async consulting(ctx) {
    //参数判断
    let ctx_query = ctx.query, page_num = 1, page_size = 10;
    page_num = ctx_query.page_num || page_num;
    page_size = ctx_query.page_size || page_size;

    //请求接口
    const data = await ctx.service.index.selectAdvisory({ page_num, page_size })
    const foot = await ctx.service.index.selectFriendlyLinks();
    data.foot = foot.foot;
    //渲染页面
    await ctx.render('consulting.ejs', data || {
      success: {
        items: []
      }
    })
  };
  //合作
  async channel(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('channel.ejs', foot)
  };
  //ai识客
  async ak(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('ak.ejs', foot)
  };

  //关于我们
  async aboutme(ctx) {
    const foot = await ctx.service.index.selectFriendlyLinks();
    await ctx.render('aboutme.ejs', foot)
  };

  //404
  async nopage(ctx) {
    await ctx.render('404.ejs')
  };
  async errorpage(ctx) {
    await ctx.render('50x.ejs')
  };



  //mobile
  async mindex(ctx) {
    await ctx.render(mobile + '/index.ejs')
  };

  async misales(ctx) {
    await ctx.render(mobile + '/isales.ejs')
  };


  async mjq(ctx) {
    await ctx.render(mobile + '/jq.ejs')
  };

  async msy(ctx) {
    await ctx.render(mobile + '/sy.html')
  };

  async mabotme(ctx) {
    await ctx.render(mobile + '/abotme.ejs')
  };

  async mak(ctx) {
    await ctx.render(mobile + '/ak.ejs')
  };
  async mconsultingxq(ctx) {
    let ctx_query = ctx.query, data = {};
    if (ctx_query.id) {
      data = await ctx.service.index.selectAdvisoryById(ctx_query.id)
    } else {
      data.success = false;
    }
    const foot = await ctx.service.index.selectFriendlyLinks();
    data.foot = foot.foot;
    await ctx.render(mobile + 'consultingxq.ejs', data)
  };

  async mconsulting(ctx) {
    //参数判断
    let ctx_query = ctx.query, page_num = 1, page_size = 10;
    page_num = ctx_query.page_num || page_num;
    page_size = ctx_query.page_size || page_size;

    //请求接口
    const data = await ctx.service.index.selectAdvisory({ page_num, page_size })
    //渲染页面
    await ctx.render(mobile + 'consulting.ejs', data || {
      success: {
        items: []
      }
    })
  };

}

module.exports = HomeController;
