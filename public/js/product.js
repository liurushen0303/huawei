import './library/jquery.js';
import {baseUrl} from './library/config.js';
import './library/cookie.js';
import './library/jq22.js';

(function() {
  let id = location.search.split('=')[1]; // 获得商品id
  $.ajax({
      type: "get",
      url: `${baseUrl}/product/getItem`,
      data: { id: id },
      dataType: "json",
      success: function(res) {
        console.log(res,'ew');
          res = res[0];
          let picture = JSON.parse(res.picture);
          console.log(picture);
          // let template = `
          // <h1>${res.title}</h1>
          // <div class="p-picture">
          //     <img src="../${picture[1].src}">
          // </div>
          // <div class="p-price">
          //     价格:<span>￥</span>${res.price}
          // </div>
          // <div class="p-num">库存数量:${res.num}</div>
          // <input type="number" value="1" min="1" max="${res.num}" id="num">
          // <input type="button" value="加入购物车" id="additem">
          // <div>
          //     ${res.details}
          // </div>
          // `;
          let template = `
          <div>
          <div class="product-meta">
              <h1>${res.title}</h1>
              <div class="product-slogan">
                  <span>【10:08限量开售】①赠手机摄影课程，抽国内机票 ②以旧换新最高补贴1111元</span>
              </div>
          </div>
          <!-- 价格 -->
          <div class="product-info">
              <div class="product-info-list clearfix">
                  <label for="">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 格</label>
                  <div class="product-price-info">
                      <span>
                          <em>￥</em>
                          ${res.price}
                      </span>
                  </div>
              </div>
              <div class="product-info-list clearfix">
                  <label for="">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</label>
                  <div class="product-prom fl show">
                      <div class="product-prom-item clearfix">
                          <em class="tag">商品赠券</em>
                          <div class="product-prom-con">
                              <span class="product-prom-word">赠华为手机摄影课程 </span>
                          </div>
                      </div>
                      <div class="product-prom-item clearfix">
                          <em class="tag">赠送积分</em>
                          <div class="product-prom-con">
                              购买即赠商城积分，积分可抵现~
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="hr-20"></div>
          <!-- 服务说明 -->
          <div class="product-description clearfix">
              <label for="">服务说明</label>
              <div class="fl">
                  <div class="product-description-list clearfix">
                      <ul>
                          <li>
                              <img src="../img/past.png" alt="">
                              已满48元已免运费</li>
                          <li>
                              <img src="../img/past.png" alt="">
                              由华为商城负责发货，并提供售后服务</li>
                      </ul>
                  </div>
              </div>
          </div>
          <!-- 商品编码 -->
          <div class="product-description clearfix">
              <label for="">商品编码</label>
              <div class="fl">2601010234001</div>
          </div>
          <div class="hr-5"></div>
          <div class="line"></div>
          <div class="hr-16"></div>
          <!-- 商品分类 -->
          <div class="product-p">
              <dl class="product-choose clearfix  product-choosepic">
                  <label for="">选择颜色</label>
                  <div class="product-choose-detail ">
                      <ul>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <img src="../${picture[1].src}"
                                          alt="">
                                      <p><span>亮黑色</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <img src="../${picture[2].src}"
                                          alt="">
                                      <p><span>釉白色</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <img src="../${picture[3].src}"
                                          alt="">
                                      <p><span>秘银色</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <img src="../${picture[4].src}"
                                          alt="">
                                      <p><span>夏日胡杨</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <img src="../${picture[5].src}"
                                          alt="">
                                      <p><span>秋日胡杨</span></p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </dl>
              <dl class="product-choose clearfix ">
                  <label for="">选择版本</label>
                  <div class="product-choose-detail ">
                      <ul>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <p><span>5G全网通 8GB+256GB</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <p><span>5G全网通 8GB+512GB</span></p>
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <p><span>5G全网通 8GB+128GB</span></p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </dl>
              <dl class="product-choose clearfix ">
                  <label for="">选择套餐</label>
                  <div class="product-choose-detail ">
                      <ul>
                          <li>
                              <div class="sku">
                                  <a href="">
                                      <p><span>官方标配</span></p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </dl>
          </div>
          <!-- 保障服务 -->
          <div class="clearfix hp" style="display: block">
              <label for="">保障服务</label>
              <div class="product-property-con fl clearfix">
                  <div class="product-service">
                      <a href="" class="product-service-btn">
                          <span class="fl max-w">华为无忧服务</span>
                          <span class="fl">&nbsp;￥1299</span>
                      </a>
                  </div>
                  <div class="product-service">
                      <a href="" class="product-service-btn">
                          <span class="fl max-w">华为无忧服务</span>
                          <span class="fl">&nbsp;￥1299</span>
                      </a>
                  </div>
                  <div class="product-service">
                      <a href="" class="product-service-btn">
                          <span class="fl max-w">华为无忧服务</span>
                          <span class="fl">&nbsp;￥1299</span>
                      </a>
                  </div>
              </div>
          </div>
          <!-- 推荐 -->
          <div class="clearfix product-recommend">
              <label for="">推荐</label>
              <div class="product-choose-relation">
                  <ul class="clearfix">
                      <li>
                          <a href="">HUAWEI Mate 40 Pro+</a>
                      </li>
                      <li>
                          <a href="">HUAWEI Mate 30E Pro</a>
                      </li>
                      <li>
                          <a href="">HUAWEI Mate 40 RS保时捷设计</a>
                      </li>
                      <li>
                          <a href="">HUAWEI P40 Pro</a>
                      </li>
                  </ul>
              </div>
          </div>
          <!-- 按钮 -->
          <div class="product-menu">
              <input type="number" class="product-t">
              <input class="product-box"><span style="position: relative; z-index: 10;left: -55px;text-align: center;">加入购物车</span></div>
      </div>
          `;

          // 渲染页面
          $('.product-m').append(template);
      }
  });

})();