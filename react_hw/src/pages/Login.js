import React, { useState } from 'react';
import styled from 'styled-components';


const Box = styled.div`
  display: inline-block;
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;

const Login = () => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const nameChange = (e) => {
        setNickname(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const Submit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직
        // ...

        // 입력 값을 사용하여 로그인 동작 수행
        console.log('nickname:', nickname);
        console.log('Password:', password);
    };




    return (
        <div >
            <div style={{textAlign:'center', marginTop:'100px'}}>
                <h1>LogIn</h1>
            </div>
            <Box>
                <form onSubmit={Submit}>
                    <div style={{marginBottom:'20px', marginTop:'30px'}}>
                        <label style={{marginRight:'10px'}}>Nickname:</label>
                        <input 
                            id="nickname" 
                            value={nickname} 
                            onChange={nameChange} 
                            style={{width:'200px'}}
                        />
                    </div>
                    <div>
                        <label style={{marginRight:'10px'}}>Password:</label>
                        <input 
                            id="password" 
                            value={password} 
                            onChange={passwordChange} 
                            style={{width:'200px'}}
                            />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <button type="submit">LogIn</button>
                    </div>
                </form>
            </Box>
        </div>
    );
};

export default Login;
