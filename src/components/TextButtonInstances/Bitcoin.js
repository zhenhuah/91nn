//比特币按钮
import './style.css'
import TextButton from '../TextButton'

const buttonName="比特币"

const Bitcoin = () => {
	function handleClick(id) {
		dispatch({
			type: 'homePage/bitcoinClicked',
			payload: {},
		});
	}
	return (
		<TextButton
			text={buttonName}
			onClick={handleClick}
		/>
	);
};

export default Bitcoin;
