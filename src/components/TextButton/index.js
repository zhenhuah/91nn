//显示文本，并且在点击后，调用回调函数
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const TextButton = ({text,textSize,onClick }) => {
  return (
    <div/>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,//文本
  textSize:PropTypes.number.isRequired,//文本大小
  onClick: PropTypes.func.isRequired,//点击文本后的回调函数
};

export default TextButton;
