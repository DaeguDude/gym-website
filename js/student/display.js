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
    let studentInfo = [];
    studentInfo.push(getUserName());
    studentInfo.push(getDateOfBirth());
    studentInfo.push(getGender());
    studentInfo.push(getContact());
    studentInfo.push(getAddress());
    studentInfo.push(getBelt());
    studentInfo.push(getStripe());
    studentInfo.push(getStartDate());
    studentInfo.push(getFinishDate());


    // every를 통하여 테스트를 통과하는지 안 통과하는지 만들 것이다.
    // 내가 체크해야할 것은,
    // 1. "" 인지? 값이 비어있음
    // 2. undefined 인지? 값이 비어있음

    // 이 두 개중 그 어느것도 없다면, 값이 다 제대로 들어있는거라 말할 수 있다.
    studentInfo.every( info => (info != '' || info != undefined) );
    
    
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

Display.addRegisterStudentEvent();