//一排文本按钮，最后显示
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const TextButton = ({text,textSize,onClick }) => {
	return (
		<div/>
	);
};

TextButton.propTypes = {
	count: PropTypes.number.isRequired,//页面一共显示
	textSize:PropTypes.number.isRequired,//文本大小
	onClick: PropTypes.func.isRequired,//点击文本后的回调函数
};

export default TextButton;
