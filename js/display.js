const userFactory = (name, phoneNum) => {
  
  const getName = () => name;
  const getPhoneNum = () => phoneNum;
 
  return {
    getName,
    getPhoneNum
  }
}

let users = [];
let user1 = userFactory('sanghak', '1290');
let user2 = userFactory('dooHeum', '5565');






let mainNumBtns = document.getElementById('main-num-btns');
let mainBtnItems = Array.from(mainNumBtns.children);

let studentNum = document.getElementById('student-num');


// 버튼 클릭했을시 버튼에 있는 텍스트 읽기
mainBtnItems.forEach(btn => {
  

  btn.addEventListener('click', event => {
    studentNum.value += btn.innerHTML;
  })

})