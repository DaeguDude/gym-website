// // 관원들을 생성해주는 함수
// const studentFactory = (name, gender, age, contact, address) => {
  
//   return {
//     name,
//     gender,
//     age,
//     contact,
//     address
//   }
// }

// 
const Student = () => {
  // 이름, 생년월일, 성별, 연락처, 주소, 벨트, 그랄, 등록일, 남은 날짜
  let _name;
  let _dateOfBirth;
  let _gender;
  let _contact;
  let _address;
  let _belt;
  let _stripe;
  let _startDate;
  let _finishDate;

  // 속성들에 값을 부여해주는 함수들
  const setName = (name) => {
    _name = name;
  } 

  const setDateOfBirth = (dateOfBirth) => {
    _dateOfBirth = dateOfBirth;
  }

  const setGender = (gender) => {
    _gender = gender;
  }

  const setContact = (contact) => {
    _contact = contact;
  }

  const setAddress = (address) => {
    _address = address;
  }

  const setBelt = (belt) => {
    belt = belt;
  }

  const setStripe = (stripe) => {
    _stripe = stripe;
  }

  const setStartDate = (startDate) => {
    _startDate = startDate;
  }

  const setFinishDate = (finishDate) => {
    _finishDate = finishDate;
  }

  // 속성의 값을 읽어주는 함수들
  const getName = () => {
    return _name;
  } 

  const getDateOfBirth = () => {
    return _dateOfBirth;
  } 

  const getGender = () => {
    return _gender;
  } 

  const getContact = () => {
    return _name;
  } 

  const getAddress = () => {
    return _name;
  } 

  const getBelt = () => {
    return _name;
  } 

  const getStripe = () => {
    return _name;
  } 

  const getStartDate = () => {
    return _name;
  } 

  const getFinishDate = () => {
    return _name;
  } 

  return {
    setName,
    setDateOfBirth,
    setGender,
    setContact,
    setAddress,
    setBelt,
    setStripe,
    setStartDate,
    setFinishDate    
  }
} 



