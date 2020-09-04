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
    _belt = belt;
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
    return _contact;
  } 

  const getAddress = () => {
    return _address;
  } 

  const getBelt = () => {
    return _belt;
  } 

  const getStripe = () => {
    return _stripe;
  } 

  const getStartDate = () => {
    return _startDate;
  } 

  const getFinishDate = () => {
    return _finishDate;
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
    setFinishDate,

    getName,
    getDateOfBirth,
    getGender,
    getContact,
    getAddress,
    getBelt,
    getStripe,
    getStartDate,
    getFinishDate
  }
} 



