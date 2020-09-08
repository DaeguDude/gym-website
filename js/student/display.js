import { StudentFactory } from './studentFactory.js';
import { Student } from './student.js';

const Display = (() => {
  let userInfoTable = document.querySelector('.user-info-table');

  const registerStudent = () => {
    // let name = getUserName();
    // let dateOfBirth = getDateOfBirth();
    // let gender = getGender();
    // let contact = getContact();
    // let address = getAddress();
    // let belt = getBelt();
    // let stripe = getStripe();
    // let startDate = getStartDate();
    // let finishDate = getFinishDate();
    let student = StudentFactory();
    student.setName(getUserName());
    student.setDateOfBirth(getDateOfBirth());
    student.setGender(getGender());
    student.setContact(getContact());
    student.setAddress(getAddress());
    student.setBelt(getBelt());
    student.setStripe(getStripe());
    student.setStartDate(getStartDate());
    student.setFinishDate(getFinishDate());
    
    Student.addStudent(student);
  }

  const doesArrayHaveEmptyString = (arr) => {

  }

  const doesArrayHaveUndefined = (arr) => {

  }

  // 회원 등록하기 버튼이 클릭되면, 클릭이 되었는지 안 되었는지를 아는 이벤트 리스터 추가
  const addRegisterStudentEvent = () => {
    let registerBtn = document.querySelector('.table-container .submit-btn');
    registerBtn.addEventListener('click', registerStudent);
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

    addRegisterStudentEvent,
    registerStudent
  }
})();

export { Display };