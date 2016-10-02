import React from 'react';

// STATEFUL B/C ADDING COMPONENTWILLMOUNT
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  };

// Probably, the logic for getting shared users should be an effect of textEditor mounting
  componentWillMount() {
    console.log('inside NavBar componentWillMount');
    var docId = this.props.curDoc;
    var userId = this.props.curUser;
    this.props.getSharedUsers(docId, userId);
    // this.props.setSharedUsersState(sharedUsers);
  }

  render() {
    return (
      <div className="NavBarWrapper">
        <div className="NavBarContainer">
          <div className="userCircles">
          {this.props.curSharedUsers.map((user, i) => {
            var initials = this.props.getInitials(user); 
            return <div key={i} className='userCircle'>{initials}</div>
          })}
          </div>
          <div className="nav-bar-buttons">
            <img id="call-nav-button" src="public/images/makecall.png"></img>
            <button>Share</button>
            <a href="http://localhost:8000/">logout</a>
          </div>
        </div>
      </div>
    );
  }
};


// STATELESS VERSION
// const NavBar = (props) => 
//   (
//     <div className="NavBarWrapper">
//       <div className="NavBarContainer">
//         <div className="userCircles">
//         {props.curSharedUsers.map((user, i) => {
//           var initials = props.getInitials(user); 
//           return <div key={i} className='userCircle'>{initials}</div>
//         })}
//         </div>
//         <div className="nav-bar-buttons">
//           <img id="call-nav-button" src="public/images/makecall.png"></img>
//           <button>Share</button>
//           <a href="http://localhost:8000/">logout</a>
//         </div>
//       </div>
//     </div>
//   );
// export default NavBar;

