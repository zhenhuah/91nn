import React from 'react';
import { connect } from 'dva';
const HomePage = ({ dispatch, homePage }) => {

  return (
    <div>
      <h2>List of Products</h2>
    </div>
  );
};


export default connect(({ homePage }) => ({
  homePage,
}))(HomePage);
