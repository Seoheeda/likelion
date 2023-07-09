import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Box = styled.div`
  display: inline-block;
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;

const Login = ({ isLoggedIn, setIsLoggedIn, posts }) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const nameChange = (e) => {
        setNickname(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const Submit = (e) => {
        e.preventDefault();
        if (nickname === 'alicia' && password === '1015') {
            setIsLoggedIn(true);
            navigate('/');
        } else {
            alert("Invaid nickname or password !");
        };

    };

    return (
        <div>

            <div >
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1>LogIn</h1>
                </div>
                <Box>
                    <form onSubmit={Submit}>
                        <div style={{ marginBottom: '20px', marginTop: '30px' }}>
                            <label style={{ marginRight: '6px' }}>Nickname:</label>
                            <input
                                id="nickname"
                                value={nickname}
                                onChange={nameChange}
                                style={{ width: '200px' }}
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: '10px' }}>Password:</label>
                            <input
                                id="password"
                                value={password}
                                onChange={passwordChange}
                                style={{ width: '200px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                            <button type="submit">LogIn</button>
                        </div>
                    </form>
                </Box>
            </div>
            {/* <PostList posts={posts} isLoggedIn={isLoggedIn} /> */}
        </div>
    );
};

export default Login;

