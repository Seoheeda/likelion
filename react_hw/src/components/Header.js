import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', marginLeft: '30px' }}>
                        <h1>
                            Life Story
                        </h1>
                    </Link>
                    <h4 style={{ marginLeft: '30px', marginTop:'30px' }}>My Life, My Story</h4>
                </div>
                <div style={{ textAlign: 'right', marginRight: '30px' }}>
                    <Link to="./login">
                        <button>LogIn</button>
                    </Link>
                    <Link to="./signin">
                        <button style={{margin:'10px'}}>SignIn</button>
                    </Link>
                    <Link to='/'>
                        <button>LogOut</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
