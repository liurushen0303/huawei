import './library/jquery.js';
import './library/swiper-3.4.2.jquery.min.js';
import './library/jquery.lazyload.min.js';

// 轮播图
let mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000,//可选选项，自动滑动
  effect: 'fade', //切换效果
  loop: true,     //循环播放
  pagination: '.swiper-pagination',  //分页器
  paginationClickable: true,  //点击分页器切换图片
  prevButton: '.swiper-button-prev',  //上一张按钮
  nextButton: '.swiper-button-next',  //下一张按钮
  fade: {
    crossFade: true,
  }
})
//广告轮播图
let bannerSwiper = new Swiper('#bannerswiper', {
  autoplay: 3000,//可选选项，自动滑动
  effect: 'fade', //切换效果
  loop: true,     //循环播放
  pagination: '.swiper-pagination',  //分页器
  paginationClickable: true,  //点击分页器切换图片
  prevButton: '.swiper-button-prev',  //上一张按钮
  nextButton: '.swiper-button-next',  //下一张按钮
  fade: {
    crossFade: true,
  }
})

//商品轮播
let listSwiper = new Swiper('.swipers', {
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
});

var fdline = new Swiper('.fd-line', {
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
})

//图片懒加载
$(function () {
  $("img.lazy").lazyload({
    placeholder: "../img/lanjiazai.jpg",
    effect: "fadeIn",
  });
});
// 数据渲染
(function () {
  let baseUrl='http://10.31.162.69:8888';
  $.ajax({
    type: "get",
    url: `${baseUrl}/product/getProducts`,
    dataType: "json",
    success: function (res) {
      let tempLi = '';
      res.forEach((elm, i) =>{
        let picture = JSON.parse(elm.picture);
        tempLi += `
        <li>
             <a href="./html/product.html?id=${elm.id}" class="item">
                <img src="${picture[0].src}"alt="">
             </a>
        </li>
        `
      })
      $('.promo-list').append(tempLi);
    }
  })
}())