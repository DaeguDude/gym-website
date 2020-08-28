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

  // 입력한 학생의 번호가 있는지 검색해주는 함수, 있으면 true 없으면 false 반환
  const checkContact = (contact) => {
    // 변수에 전화번호 목록을 다 담아줌
    let contactList = getAllStudentsContact();
    // 전화번호가 있으면 true 없으면 false
    let isThere = false;

    // 관원이 입력한 전화번호가 전화번호부에 있는지 검색 있으면 true 반환
    contactList.forEach(phoneNum => {
      if(contact === phoneNum) {
        isThere = true;
        return isThere;
      }
    })

    // 없다면 false 반환
    return isThere;
  }

  return {
    makeStudent,
    getAllStudents,
    getAllStudentsContact,
    checkContact
  }
})();

export { Student };


