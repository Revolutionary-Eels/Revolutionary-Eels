import React from 'react';
import FlashMessage from './flashMessage.jsx';
import {connect} from 'react-redux';
import {deleteFlashMessage} from '../../actions/addFlashMessages.jsx';


class FlashMessagesList extends React.Component {
	render() {
		const {deleteFlashMessage} = this.props
		const messages = this.props.messages.map(message =>
			<FlashMessage key={message.id} message={message} 
			deleteFlashMessage={deleteFlashMessage}
			/>
		);
		return (
			<div>
				{messages}
			</div>
		)
	}
}

FlashMessagesList.propTypes = {
	messages: React.PropTypes.array.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	}
}

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessagesList);