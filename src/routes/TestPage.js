import React from 'react';
import { connect } from 'dva';
import HeadItem from '../components/HeadItem'
import IconButton from '../components/IconButton'

const TestPage = ({ dispatch, testPage }) => {
	let onClick = () => {
		console.log("image been clicked")
	}

	return (
		<div>
			<h2> Hello TestPage</h2>
			<IconButton 
				icon='http://www.hqcx.net/uploadfile/2016/0519/20160519112144465.jpg'
				text='布比'
				onClick={onClick}
			/>
		</div>
	);
};

export default connect(({ testPage }) => ({

}))(TestPage);