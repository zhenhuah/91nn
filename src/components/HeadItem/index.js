//头像组件

import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import './style.css'

const HeadItem = ({name,avatarSrc,from }) => {
  let avatar,fromDiv

  if(avatarSrc){
    avatar=(<Avatar src={avatarSrc} />)
  }
  else{
    avatar=(<Avatar style={{ backgroundColor: '#87d068' }} icon="user"/>)
  }

  if(from){
    fromDiv=<label>来自:{from}</label>
  }

  return (
    <div>
      {avatar}
      <div>
        <label>{name}</label>
        {fromDiv}
      </div>
    </div>
  );
};

HeadItem.propTypes = {
  name: PropTypes.string.isRequired,//名字
  avatarSrc: PropTypes.string,//头像文件
  from: PropTypes.string,//来自什么媒体
};

export default HeadItem;
