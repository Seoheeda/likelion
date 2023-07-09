import React, { useState } from 'react';
import styled from 'styled-components';


const Box = styled.div`
  display: inline-block;
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;

const Signin = ({onSignin}) => {
  const [realnickname, setRealNickname] = useState('');
  const [realpassword, setRealPassword] = useState('');

  const realnameChange = (e) => {
    setRealNickname(e.target.value);
  };

  const realpasswordChange = (e) => {
    setRealPassword(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    onSignin(realnickname, realpassword);
    };

    return (
        <div >
            <div style={{textAlign:'center', marginTop:'100px'}}>
                <h1>SignIn</h1>
            </div>
            <Box>
                <form onSubmit={Submit}>
                    <div style={{marginBottom:'20px', marginTop:'30px'}}>
                        <label style={{marginRight:'10px'}}>Nickname:</label>
                        <input 
                            id="nickname" 
                            value={realnickname}
                            onChange={realnameChange}
                            style={{width:'200px'}}
                        />
                    </div>
                    <div>
                        <label style={{marginRight:'10px'}}>Password:</label>
                        <input 
                            id="password" 
                            value={realpassword}
                            onChange={realpasswordChange}
                            style={{width:'200px'}}
                            />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <button type="submit">SignIn</button>
                    </div>
                </form>
            </Box>
        </div>
    );
};

export default Signin;


