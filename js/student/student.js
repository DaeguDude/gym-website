// 관원들을 생성해주는 함수
const studentFactory = (name, gender, age, contact, address) => {
  
  return {
    name,
    gender,
    age,
    contact,
    address
  }
}

let student1 = studentFactory('Sanghak', '남자', '29', '010-4993-1290', '대구');
console.log(student1);