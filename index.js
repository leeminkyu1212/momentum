async function setRenderBackground() {
  //body의 background 주소를 넣어도 ok

  //일부러 axios 요청으로 이미지를 받아오기
  //blob->이미지,사운드,비디오등 멀티미디어 데이터를 다룰 때 사용
  const result = await axios.get("https://picsum.photos/1280/720", {
    responseType: "blob",
  });

  console.log(result.data);
  //URL.createObjectURL->임시 URL을 만든다(페이지 내에서만 유효)
  //받아온 데이터를 임시 URL을 만들어서 그 URL의 body에 넣는다
  const imageURL = URL.createObjectURL(result.data);
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
}

//const setRenderBackground=async()=>{}

//시간갱신
function setTime() {
  const timer = document.querySelector(".timer");

  setInterval(() => {
    //date 함수
    const date = new Date();
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    //date.getHours
  }, 1000);
}
function getMemo() {
  //localStorage로부터 가져와서 memo에 넣어주는 작업
  const memo = document.querySelector(".memo");
  memo.textContent = localStorage.getItem("todo");
}

function setMemo() {
  const memoInput = document.querySelector(".memo-input");
  memoInput.addEventListener("keyup", (event) => {
    console.log(event.code);
    //event.code가 Enter인 경우에만 메모를 바꿀수 있도록
    if (event.code === "Enter" && event.target.value) {
      //메모를 저장
      const memo = document.querySelector(".memo");
      memo.textContent = event.target.value;
      //메모가 날아가지 않도록 저장
      //브라우저에도 간단한 저장소 개념이 있다. localStorage
      //localstorage사용법
      //localstorage.setItem('키','넣을값')
      localStorage.setItem("todo", event.target.value);

      //localstorage.getItem('키')->값을 가져온다
      //getMemo함수로 분리
      getMemo();
    }
  });
}
function deleteMemo(){
  //이벤트 위임

  //같은 함수를 수백만개의 addeventLister 가정->속도저하
  document.addEventListener('click',(event)=>{
    console.log(event.target);
    //event.target.classList가 heelo 인경우에 ~이벤트실행

    //localStrage 를 지워야하고
    if(event.target.classList.contains('memo')){
      localStorage.removeItem('todo');

      event.target.textContent="";
    }
    //html파트도 지워야한다

  })
}
function allRender() {
  setRenderBackground();
  //5초마다 해당 콜백함수 반복

  setTime();
  setMemo();
  getMemo();
  setInterval(() => {
    setRenderBackground();
  }, 5000);
  deleteMemo();
}

allRender();
