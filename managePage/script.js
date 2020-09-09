import { students } from './studentObjectEx.js';

let studentListTable = document.querySelector('table.student-list-table');
let tableBody = studentListTable.children[0];
console.log(tableBody);


students.forEach(student => {
  let tr = document.createElement('tr');
  for(let i = 0; i < 7; i++) {
    let td = document.createElement('td');
    td.innerText = student.getName
  }
  
})