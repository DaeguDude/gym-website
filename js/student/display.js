import { StudentFactory } from './studentFactory.js';
import { Student } from './student.js';

const Display = (() => {
  let userInfoTable = document.querySelector('.user-info-table');

  const getAllUserInfo = () => {
    let studentInfo = [];
    studentInfo.push(getUserName());
    studentInfo.push(getDateOfBirth());
    studentInfo.push(getGender());
    studentInfo.push(getAddress());
    studentInfo.push(getBelt());
    studentInfo.push(getStripe());
    studentInfo.push(getStartDate());
    studentInfo.push(getFinishDate());
    
    return studentInfo;
  }

  const checkMissingValue = (arr) => {
    let isMissing = !( arr.every(elem => (elem != '' && elem != undefined)) );
    return isMissing;
  }

  const makeStudent = (studentInfo) => {
    let student = StudentFactory();
    
    let name = studentInfo[0];
    let dateOfBirth = studentInfo[1];
    let gender = studentInfo[2];
    let contact = studentInfo[3];
    let address = studentInfo[4];
    let belt = studentInfo[5];
    let stripe = studentInfo[6];
    let startDate = studentInfo[7];
    let finishDate = studentInfo[8];
    
    student.setName(name);
    student.setDateOfBirth(dateOfBirth);
    student.setGender(gender);
    student.setContact(contact);
    student.setAddress(address);
    student.setBelt(belt);
    student.setStripe(stripe);
    student.setStartDate(startDate);
    student.setFinishDate(finishDate);

    return student;
  }

  const addStudent = () => {
    // 배열로 정보를 받음. 아직 값이 누락된게 있는지 알 수 없다.
    let studentInfo = getAllUserInfo();
    // 누락된 값을 체크함
    let isMissingSth = checkMissingValue(studentInfo);

    if (isMissingSth) {
      // 누락된 값이 있다면, 값을 다 채워넣으라고 해줌
    } else {
      // 누락된 값이 없으면 학생을 추가해줌
      let student = makeStudent(studentInfo);
      Student.addStudent(student);
    }
  }




  // 회원 등록하기 버튼이 클릭되면, 클릭이 되었는지 안 되었는지를 아는 이벤트 리스터 추가
  const addStudentEvent = () => {
    let registerBtn = document.querySelector('.table-container .submit-btn');
    registerBtn.addEventListener('click', addStudent);
  }


  const getUserName = () => {
    let td = document.querySelectorAll('td')[0]
    let input = td.firstChild;
    let name = input.value;
    return name;
  }

  const getDateOfBirth = () => {
    let td = document.querySelectorAll('td')[1]
    let input = td.firstChild;
    let date = input.value;
    return date;
  }

  const getGender = () => {
    let femaleRadio = document.querySelectorAll("input[type='radio']")[0];
    let maleRadio = document.querySelectorAll("input[type='radio']")[1];
    
    if(femaleRadio.checked) {
      return '여자';
    } else if(maleRadio.checked) {
      return '남자';
    }
  }

  const getContact = () => {
    let telInputs = document.querySelectorAll("input[type='tel']");
    let startNums = telInputs[0];
    let midNums = telInputs[1];
    let endNums = telInputs[2];

    let contact = startNums.value + midNums.value + endNums.value;
    return contact;
  }

  const getAddress = () => {
    let td = document.querySelectorAll('td')[4]
    let input = td.firstChild;
    let address = input.value;
    return address;
  }

  const getBelt = () => {
    let select = document.querySelectorAll('select')[0];
    let belt = select.options[select.selectedIndex].value
    return belt;
  }

  const getStripe = () => {
    let select = document.querySelectorAll('select')[1];
    let stripe = select.options[select.selectedIndex].value
    return stripe;
  }

  const getStartDate = () => {
    let td = document.querySelectorAll('td')[6];
    let input = td.firstChild;
    let date = input.value;
    return date;
  }

  const getFinishDate = () => {
    let td = document.querySelectorAll('td')[7];
    let input = td.firstChild;
    let date = input.value;
    return date;
  }
  
  return {
    getUserName,
    getDateOfBirth,
    getGender,
    getContact,
    getAddress,
    getBelt,
    getStripe,
    getStartDate,
    getFinishDate,

    addStudentEvent
  }
})();

export { Display };