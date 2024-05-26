import React, { useState } from "react";
import axios from "axios";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value);
};
export const getCookie = (name) => {
  return cookies.get(name);
};

function App() {
  const [count, setCount] = useState(0);

  const apiCall = axios.create({
    baseURL: "https://dummyjson.com",
  });

  function handleClick() {
    setCount(count + 1);
  }

  
  const login = async (id="emilys", pw="emilyspass") => {
    try {
      const response = await apiCall.post("/auth/login", {
        username: id,
        password: pw,
      });
      setCookie("token", response.data.token);
      return response.data.token;
    } catch (error) {
      return error;
    }
  };

  console.log(login());
  console.log("토큰", localStorage.getItem("token"));

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <div>버튼을 {count}번 눌렀습니다!</div>
    </div>
  );
}

export default App;
