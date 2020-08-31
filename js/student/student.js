// 관원과 관련된 일을 해주는 모듈
const Student = (() => {
  // 관원들을 담은 배열
  const students = [];

  // 관원들을 생성해주는 함수
  const makeStudent = (name, gender, age, contact, address) => {
    // 새로운 관원을 배열(students)에 추가해줌 
    students.push({name, gender, age, contact, address});
  }

  // 모든 관원 오브젝트를 반환해주는 함수
  const getAllStudents = () => {
    return students;
  }

  // 모든 학생 전화번호를 반환해주는 함수, 배열로 반환함
  const getAllStudentsContact = () => {
    let contactList = [];
    students.forEach(student => {
      contactList.push(student.contact);
    })

    return contactList;
  }

  /**
   * 입력한 학생의 번호가 있는지 검색해주는 함수, 있으면 true 없으면 false 반환.
   * 마지막 4자리를 검색한다.
   *  */ 
  const checkContact = (contact) => {
    // 변수에 전화번호 목록을 다 담아줌
    let contactList = getAllStudentsContact();

    // 관원들의 전화번호 끝 번호 4개를 담은 배열
    let lastFourDigitContact = contactList.map(contact => contact.slice(-4));
    
    // 전화번호가 있으면 true 없으면 false
    let isThere = false;

    // 관원이 입력한 전화번호가 전화번호부에 있는지 검색 있으면 true 반환
    lastFourDigitContact.forEach(phoneNum => {
      if(contact === phoneNum) {
        isThere = true;
        return isThere;
      }
    })

    // 없다면 false 반환
    return isThere;
  }

  // 마지막 전화번호 4자리를 이용해 그 사람의 이름을 반환함, 없으면 undefined
  const getStudentName = (contact) => {
    let name;
    students.forEach(student => {
      let phoneNumber = (student.contact).slice(-4);
      if(phoneNumber === contact) {
        name = student.name;
      }
    })

    return name;
  }

  return {
    makeStudent,
    getAllStudents,
    getAllStudentsContact,
    checkContact,
    getStudentName
  }
})();

Student.makeStudent('김상학', '남자', '29', '01049931290', '대구광역시 달서구 도원동 311동 506호');
Student.makeStudent('박경환', '남자', '33', '01038819804', '대구광역시 달서구 성서');
Student.makeStudent('윤길상', '남자', '33', '01077461153', '대구광역시 달서구 옥포');
Student.makeStudent('이승철', '남자', '28', '01068880063', '대구광역시 달서구 상인동');
Student.makeStudent('오득원', '남자', '29', '01041204839', '대구광역시 달서구 월배 2차 아이파크');

export { Student };


