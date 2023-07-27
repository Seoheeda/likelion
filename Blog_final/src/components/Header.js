import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout, nickname }) => {
  return (
    <header>
      <div style={{ display: 'flex', jstifyConutent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', marginLeft: '30px' }}>
            <h1>Life Story</h1>
          </Link>
          <h4 style={{ marginLeft: '30px', marginTop: '30px' }}>My Life, My Story</h4>
        </div>
        <div style={{ textAlign: 'right', marginRight: '30px' }}>
          {isLoggedIn ? (
            <div>
              <p style={{marginBottom:'5px'}}>welcome!</p>

              <Link to="/">
                <button style={{marginBottom:'20px'}} onClick={handleLogout}>LogOut</button>
              </Link>
            </div>
          ) : (
            <div style={{marginLeft:'1300px'}}>
              <Link to="./login">
                <button>LogIn</button>
              </Link>
              <Link to="./signin">
                <button style={{ margin: '10px' }}>SignIn</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
