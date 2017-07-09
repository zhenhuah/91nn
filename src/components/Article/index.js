//文章组件
import PropTypes from 'prop-types';
import 'style.css'

const Article = ({onClicked,title,body}) => {
	return (
		<div/>
	);
};

Article.propTypes = {
	onClicked: PropTypes.func.isRequired,//点击文章后的回调函数
	title: PropTypes.string,//文章标题，不必选，不输入则不显示
	body:PropTypes.string.isRequired//文章内容
};

export default Article;
