import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commentActions from '../actions/commentActions.jsx';
import SavedCommentUnfocused from './SavedCommentUnfocused.jsx';
import SavedCommentFocused from './SavedCommentFocused.jsx';


class SavedComment extends React.Component {
  constructor(props) {
    super(props);

  }

  // toggleCommentFocus() {
  //   console.log('INSIDE TOGGLE COMMENT FOCUS');
  //   if (this.props.savedCommentFocus) {
  //     console.log('saveFocus is true:', this.props.savedCommentFocus);
  //     this.props.setFocus(false);
  //     return <SavedCommentUnfocused />
  //   } else {
  //     console.log('saveFocus is false:', this.props.savedCommentFocus);
  //     this.props.setFocus(true);
  //     console.log('Rendering focused view');
  //     // return <SavedCommentFocused setFocus={this.props.setFocus} comment={this.props.comment} />
  //   }
  // }

  render() {
    console.log('PASSED IN COMMENT SC:', this.props.comment);
    return (
      <div className="comment-saved-container">
        <SavedCommentUnfocused
          setFocus={this.props.setFocus} 
          comment={this.props.comment} 
          borderStyle={this.props.borderStyle}
          borderWidth={this.props.borderWidth}
          borderRadius={this.props.borderRadius}
          updateCommentBorderStyle={this.props.updateCommentBorderStyle}
          updateCommentBorderWidth={this.props.updateCommentBorderWidth} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    savedCommentFocus: state.comment.savedCommentFocus,
    // style: state.comment.style,
    borderStyle: state.comment.borderStyle,
    borderWidth: state.comment.borderWidth,
    borderRadius: state.comment.borderRadius
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFocus: commentActions.setFocus,
    // updateSavedCommentStyle: commentActions.updateSavedCommentStyle,
    updateCommentBorderStyle: commentActions.updateCommentBorderStyle,
    updateCommentBorderWidth: commentActions.updateCommentBorderWidth
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedComment);






// {this.toggleCommentFocus()}





/*
<SavedCommentFocused setFocus={this.props.setFocus} comment={this.props.comment} />
<SavedCommentUnfocused setFocus={this.props.setFocus} comment={this.props.comment} />

<div className="comment-saved" style={{top: this.props.comment.location - 56}}>
  <div className="comment-saved-chathead">
    <span className="comment-saved-initials">{this.props.comment.initials}</span>
  </div>
  <div className="comment-saved-text">{this.props.comment.text}</div>
</div> 
*/


