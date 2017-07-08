//显示一张图片,如首页顶部的滚动图片

import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const PosterImage = ({imageSrc,onClick }) => {
  return (
    <img src={imageSrc} onClick={onClick} />
  );
};

PosterImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,//图片地址
  onClick: PropTypes.func,//点击图片后的回调函数
};

export default PosterImage;
