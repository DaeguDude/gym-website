import { Student } from '../student/student.js';

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

  return {
    enableNumSubmitBtn,
    enableNumBtns
  }

})();

displayController.enableNumSubmitBtn();
displayController.enableNumBtns();


Student.makeStudent('김상학', '남자', '29', '01049931290', '대구광역시 달서구 도원동 311동 506호');
Student.makeStudent('박경환', '남자', '33', '01038819804', '대구광역시 달서구 성서');
Student.makeStudent('윤길상', '남자', '33', '01077461153', '대구광역시 달서구 옥포');
Student.makeStudent('이승철', '남자', '28', '01068880063', '대구광역시 달서구 상인동');
Student.makeStudent('오득원', '남자', '29', '01041204839', '대구광역시 달서구 월배 2차 아이파크');

console.log(Student.getAllStudents());