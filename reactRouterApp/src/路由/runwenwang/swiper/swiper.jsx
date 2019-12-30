// 轮播图
import React from 'react';
import { Carousel } from 'antd';
const Swiper = () => {
  return <Carousel autoplay>
    <div>
      <h3>
        <img src={require('./img/Konachan.com - 267793 annin_doufu breast_hold breasts forest goggles green_eyes gun idolmaster military purple_hair short_hair tree weapon yamato_aki.jpg')} alt="1" width='100%' />
      </h3>
    </div>
    <div>
      <h3>
        <img src={require('./img/Konachan.com - 274941 2girls agnamore anthropomorphism boots braids cape dark fire girls_frontline gloves gray_hair green_eyes gun long_hair mask red_eyes weapon.jpg')} alt="2" width='100%' />

      </h3>
    </div>
    <div>
      <h3>
        <img src={require('./img/Konachan.com - 274969 aircraft blonde_hair brown_hair building cat_smile city gloves green_eyes group gun hat long_hair orange_eyes scar twintails weapon white_hair.jpg')} alt="3" width='100%' />

      </h3>
    </div>
    <div>
      <h3>
        <img src={require('./img/Konachan.com - 274974 aamond animal atr bird braids brown_eyes brown_hair clouds eyepatch girls_frontline gun hat long_hair sky thighhighs weapon white_hair.jpg')} alt="4" width='100%' />
      </h3>
    </div>
  </Carousel>;
}

export default Swiper;
