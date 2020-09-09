const StudentFactory = () => {
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

let students = [];

let student1 = StudentFactory();
student1.setName('김상학');
student1.setDateOfBirth('1992/07/13')
student1.setGender('남자');
student1.setContact('01049931290');
student1.setAddress('대구 달서구 한실로 117');
student1.setBelt('블루');
student1.setStripe('1');
student1.setStartDate('2015/06/10');
student1.setFinishDate('2021/02/20');

let student2 = StudentFactory();
student2.setName('이승철');
student2.setDateOfBirth('1993/02/10')
student2.setGender('남자');
student2.setContact('01068880063');
student2.setAddress('대구 달서구 월배');
student2.setBelt('블루');
student2.setStripe('4');
student2.setStartDate('2014/09/20');
student2.setFinishDate('2022/02/20');

let student3 = StudentFactory();
student3.setName('박경환');
student3.setDateOfBirth('1994/10/12')
student3.setGender('남자');
student3.setContact('01058431234');
student3.setAddress('대구 달서구 성서');
student3.setBelt('블루');
student3.setStripe('3');
student3.setStartDate('2016/08/23');
student3.setFinishDate('2019/03/21');

students.push(student1);
students.push(student2);
students.push(student3);

export { students };