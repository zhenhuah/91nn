//首页的固定按钮，使用antd的Affix组件

import React from 'react';
import PropTypes from 'prop-types';
import {Affix} from 'antd';
import 'style.css'

const AffixButton = ({onArticleClicked, onPostClicked}) => {
  return (
    <Affix
    />
  );
};

AffixButton.propTypes = {
  onArticleClicked: PropTypes.func.isRequired,//点击文章后的回调函数
  onPostClicked: PropTypes.func.isRequired,//点击发帖后的回调函数
};

export default AffixButton;
