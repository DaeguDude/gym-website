import { Student } from '../student/student.js';
import { beforeCheck } from '../beforeCheck.js';
import { afterCheck } from '../afterCheck.js';

const displayController = (() => {
  // 확인버튼
  let numSubmitBtn = document.getElementById('num-submit-btn');

  // 회원번호가 나타나는 input 요소
  let studentNum = document.getElementById('student-num');

  // 확인을 눌렀을 시, input#student-num의 값을 반환해주는 이벤트를 활성화시키는 함수
  const enableNumSubmitBtn = () => {
    let studentContact = '';
    numSubmitBtn.addEventListener('click', (event) => {
      // 변수에 회원이 입력한 전화번호 값을 넣어줌
      studentContact = studentNum.value;
      // 회원 번호입력란(input#student-num) 초기화
      studentNum.value = '';

      if(Student.checkContact(studentContact)) {
        console.log('he exists bro');
      } else {
        console.log(`${studentContact} is not there!`);
      }
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

  const showBeforeCheckDisplay = () => {
    let mLeftBox = document.getElementById('m-left-box');
    mLeftBox.appendChild(beforeCheck());
  }

  const showAfterCheckDisplay = () => {
    let mLeftBox = document.getElementById('m-left-box');
    mLeftBox.appendChild(afterCheck());
  }

  return {
    showBeforeCheckDisplay,
    showAfterCheckDisplay,
    enableNumSubmitBtn,
    enableNumBtns
  }

})();

displayController.showAfterCheckDisplay();

displayController.enableNumSubmitBtn();
displayController.enableNumBtns();

console.log(Student.getAllStudents());