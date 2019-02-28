'use strict';

const mobile = '/mobile/';
const page = 'home';
const router_lsit = [
  {
    method: 'GET',
    path: '/',
    handle: 'index',
    page,
  },
  {
    method: 'GET',
    path: '/index.html',
    handle: 'index',
    page,
  },
  {
    method: 'GET',
    path: '/isales.html',
    handle: 'isales',
    page,
  },
  {
    method: 'GET',
    path: '/jq.html',
    handle: 'jq',
    page,
  },
  {
    method: 'GET',
    path: '/offer_sy.html',
    handle: 'offer_sy',
    page,
  },
  {
    method: 'GET',
    path: '/sitemap.html',
    handle: 'sitemap',
    page,
  },
  {
    method: 'GET',
    path: '/consultingxq.html',
    handle: 'consultingxq',
    page,
  },
  {
    method: 'GET',
    path: '/consulting.html',
    handle: 'consulting',
    page,
  },
  {
    method: 'GET',
    path: '/channel.html',
    handle: 'channel',
    page,
  },
  {
    method: 'GET',
    path: '/ak.html',
    handle: 'ak',
    page,
  },
  {
    method: 'GET',
    path: '/aboutme.html',
    handle: 'aboutme',
    page,
  },
  {
    method: 'GET',
    path: '/404.html',
    handle: 'nopage',
    page,
  },
  {
    method: 'GET',
    path: '/50x.html',
    handle: 'errorpage',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'index.html',
    handle: 'mindex',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'ak.html',
    handle: 'mak',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'abotme.html',
    handle: 'mabotme',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'sy.html',
    handle: 'msy',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'jq.html',
    handle: 'mjq',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'isales.html',
    handle: 'misales',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'consulting.html',
    handle: 'mconsulting',
    page,
  },
  {
    method: 'GET',
    path: mobile + 'consultingxq.html',
    page,
    handle: 'mconsultingxq',
  },
];

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, config,controller } = app;
  router_lsit.map(res => {
    const mode = res.method.toLowerCase();
    if (controller[res.page][res.handle]) {
      let prefix=config.static.prefix;
      prefix=prefix.substr(0,prefix.length-1)
      return router[mode](prefix+res.path, controller[res.page][res.handle]);
    }
    return '';
  });

};
