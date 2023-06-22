//// #4.0 Input Values ////

// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//위아래 같음 (중복 방지 위해 위 주석처리)
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// //로그인창에 입력한 값을 저장해야 함
// function onLoginBtnClick() {
//     console.log(loginInput.value);  //value : input으로 받은 값
//     console.log("click!!!")
// }

// loginButton.addEventListener("click", onLoginBtnClick);

//위의 문제점 : 로그인창에 아무것도 입력하지 않아도 입력된 것으로 됨




//// #4.1 Form Submission ////

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// //이름 입력하지 않은 경우 경고 메세지 표시
// //username.length : 문자열 username의 길이
// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);
// }

// loginButton.addEventListener("click", onLoginBtnClick);




//// #4.2 Events, #4.3 Events part two ////

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("clicked");
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick)
// link의 기본 역할은 링크로 연결
// preventDefault로 링크로 연결되는 것을 막음
// handleLinkClick()을 안해도 브라우저가 해줌



//// #4.4 Getting Username ////

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "\hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = "Hello " + username; 
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }


// loginForm.addEventListener("submit", onLoginSubmit);



//// #4.5 Saving Username ////

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "\hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem("username", username); //local storage는 따로 설정하지 않아도 있음
//     greeting.innerText = "Hello " + username;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }


// loginForm.addEventListener("submit", onLoginSubmit);



//// #4.6 Loading Username ////

// checking if there is already the user on local storage 
// if there is no user, and I do 'getitem', it answers "null"
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "\hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    paintGreetings(username);
}


function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
     paintGreetings(savedUsername);// show the greetings
}