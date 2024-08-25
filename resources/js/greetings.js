const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const clockTop = document.querySelector(".clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const CENTER = "center";


//****html > form과 h1에 .hidden이 있는상태 */

function onLoginSubmit(event) { //form sumit이 될때
    event.preventDefault();//새로고침을 막아줌(기본동작 막기)
    loginForm.classList.add(HIDDEN_CLASSNAME); //form에 .hidden 추가
    clock.classList.add(CENTER);
    const username = loginInput.value; // input의 값은 username
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 저장 
    // greeting.innerText = "Hello " + username;
    //greeting.innerText = `Hello ${username}`; 백틱 기호써주기 (영문 ~ 아니면 한문 option ~)
    paintGreeting(username); // 아래 paintGreeting 호출 | input에서 값을 가져온다
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}!`; //h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에 hidden 없애기
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(CENTER);
}
 
const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorag에 저장된 값을 가져오기

if (savedUsername === null) {//username이 없을때
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);//form에 .hidden을 없애준다 > form이 보여진다.
    loginForm.addEventListener("submit", onLoginSubmit);//form input에 값을 입력하면 submit이 된다(onLoginSubmit이 실행)

} else {
    // show the greetings
    paintGreeting(savedUsername);//h1이 보여진다. | localStorage에서 값을 가져온다.
}
