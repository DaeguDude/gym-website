// 회원번호 입력하기 전의 화면, 평소에 띄워져 있는 화면이다.
const afterCheck = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'm-left-box-bottom');
  container.setAttribute('class', 'main-box-items');

  let attendanceConfirm = document.createElement('div');
  attendanceConfirm.setAttribute('id', 'attendance-confirm');

  let checkIcon = document.createElement('span');
  checkIcon.setAttribute('class', 'material-icons md-115 md-green');
  checkIcon.innerHTML = 'check_circle';

  let studentWelcome = document.createElement('p');
  studentWelcome.setAttribute('id', 'student-welcome');
  studentWelcome.innerHTML = '김상학님, 환영합니다';

  let studentDetails = document.createElement('div');
  studentDetails.setAttribute('id', 'student-details');

  let studentBelt = document.createElement('span');
  studentBelt.setAttribute('id', 'student-belt');
  studentBelt.innerHTML = '벨트: 화이트';
  
  let studentFinishDate = document.createElement('span');
  studentFinishDate.setAttribute('id', 'student-finish-date');
  studentFinishDate.innerHTML = '남은날짜: 2020/12/23';

  // attendance-confirm 'div' 태그
  attendanceConfirm.appendChild(checkIcon);
  attendanceConfirm.appendChild(studentWelcome);

  // student-details 'div' 태그
  studentDetails.appendChild(studentBelt);
  studentDetails.appendChild(studentFinishDate);

  // m-left-box-bottom 'div' 태그 완성
  container.appendChild(attendanceConfirm);
  container.appendChild(studentDetails);

  return container;
}

export { afterCheck };

