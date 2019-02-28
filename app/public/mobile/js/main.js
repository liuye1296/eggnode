window.onload = () => {
    new Swiper('.swiper-container', {
        loop: true,//无限滚动
        pagination: {//分页器
            el: '.swiper-pagination',
        },
    })
    document.querySelector('.tab') && document.querySelector('.tab').addEventListener('click',res=>{
        const _this=document.querySelector('.page-lable');
        const className=_this.className;
        className.indexOf('click')>-1 ? _this.className='page-lable':_this.className='page-lable click'  
    })
}