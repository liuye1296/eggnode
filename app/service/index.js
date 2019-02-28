'use strict';

const Service = require('egg').Service;
class IndexService extends Service {
    async selectAdvisory(data) {
        const user = await this.app.mysql.query('SELECT * FROM TB_ADVISORY LIMIT ?, ?;',[(data.page_num-1)*data.page_size,data.page_size])
        const obj = await this.app.mysql.query('SELECT count(*) as totalRecords FROM TB_ADVISORY')
        const totalRecords=obj[0].totalRecords;
        return {success:{
            list:user,
            totalRecords:totalRecords-0,//总数
            currentPageIndex:data.page_num-0,//当前页数
            pageCount:Math.ceil(totalRecords/data.page_size)-0,//总页数
        }};
    };
    async selectAdvisoryById(id) {
        const user = await this.app.mysql.get('TB_ADVISORY',{'advisory_id':id})
        return {success:user};
    };
    async selectFriendlyLinks() {
        const user = await this.app.mysql.select('TB_BLOGROLL')
        let data = {};
        data.foot = user || {};
        return data;
    };
}
module.exports = IndexService;
