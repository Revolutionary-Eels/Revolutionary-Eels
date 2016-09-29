import React from 'react';

const NavBar = () => 
  (
    <div>
      <h3 className="brandIcon">ColLab</h3>
      <div>
        <div className="userCircles">
          <div className="userCircle"></div>
        </div>
        <button className="btn-info">Share</button>
        <a href="http://localhost:8000/" className="logout">logout</a>
      </div>
    </div>
  );
export default NavBar;