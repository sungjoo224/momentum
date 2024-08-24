const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); //오늘 날짜를 가져옴
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0"); //String - 숫자를 문자로 바꿔준다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerHTML =`<div>${year}년 ${month}월 ${day}일</div><div>${hours}:${minutes}:${seconds}</div>`;
}
//setInterval(sayHello, 5000); //5초마다 계속 출력, 단위는 ms
//setTimeout(sayHello, 5000); //5초후 한번 출력
//"1".padStart(2,"0") //"1"이라는 문자열에 padding - 공간 start - 앞: 앞공간 (2 - 글자 길이: 2개, "0" - 0을 넣어준다)
//뒤에 공간 만들기 padEnd() - 얘네들은 문자를 인식한다.

getClock();// 이걸 넣지 않으면 처음에 00:00:00으로 보이게됨
setInterval(getClock, 1000); //1초마다 실행시켜 시간이 흐르는것처럼 보임