import { StudentFactory } from './studentFactory.js';

const Student = (() => {
  let students = [];
  
  const addStudent = (student) => {
    students.push(student);
  }

  const getAllStudents = () => {
    console.log(students);
  }

  return {
    addStudent,
    getAllStudents
  }
})();

export { Student }