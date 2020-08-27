const displayController = (() => {
  // 확인버튼
  let numSubmitBtn = document.getElementById('num-submit-btn');

  // 회원번호가 나타나는 input 요소
  let studentNum = document.getElementById('student-num');

  // 확인을 눌렀을 시, input#student-num의 값을 반환해줌
  const enableNumSubmitBtn = () => {
    let studentContact = '';
    numSubmitBtn.addEventListener('click', (event) => {
      // 변수에 회원이 입력한 전화번호 값을 넣어줌
      studentContact = studentNum.value;
      console.log(studentContact);

      // 회원 번호입력란(input#student-num) 초기화
      studentNum.value = '';

    })
  }

  // 숫자 버튼을 눌렀을시, input#student-num에 그 버튼의 값을 나타내게 해주는 함수
  const enableNumBtns = () => {
    let mainNumBtns = document.getElementById('main-num-btns');
    let mainBtnItems = Array.from(mainNumBtns.children);
    
    // 각각의 버튼들이 클릭되었을시, 값을 input#student-num에 나타내줌
    mainBtnItems.forEach(btn => {
      btn.addEventListener('click', event => {
        studentNum.value += btn.innerHTML;
      })
    })
  }

  return {
    enableNumSubmitBtn,
    enableNumBtns
  }

})();

displayController.enableNumSubmitBtn();
displayController.enableNumBtns();