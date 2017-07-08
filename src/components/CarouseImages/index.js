//实现图片的轮流显示（如首页图片的滚动显示），输入参数为数组，数组内容为PostrImage组件
import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import PosterImage from '../PosterImage'
import './style.css'
const CarouseImages = ({posters}) => {
  return (
    <Carousel autoplay>

    </Carousel>
  );
};

CarouseImages.propTypes = {
  posters: PropTypes.array.isRequired
};

export default CarouseImages;
