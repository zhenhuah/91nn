import React from 'react';
import PropTypes from 'prop-types';
const IconButton = ({icon,iconSize,iconPosition,text,textSize,textPosition,onClick}) => {
	return (
		<div onClick={onClick}>
			<img src={icon} />
			<label>{text}</label>
		</div>
	);
};

IconButton.propTypes = {
	icon: PropTypes.string,//icon的图片路径
	iconSize: PropTypes.array,//icon的图片大小
	iconPosition: PropTypes.array,//icon的位置
	text: PropTypes.string,//文本
	textSize: PropTypes.array,//文本的大小
	textPosition: PropTypes.array,//文本的位置
	onClick: PropTypes.func,//点击后触发的方法
};

export default IconButton;