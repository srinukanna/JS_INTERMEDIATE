const students =[];

// const obj={id: 101,
// name : "kanna",
// age : 22,
// department:"CSE",
// cgpa : 8.6,
// gender : 'M',
// placed : false}

const searchInput = document.querySelector('.search_input');
const dataContainer = document.querySelector('.dataContainer');
const resultContainer = document.querySelector('.resultContainer');

const allStudents = document.querySelector('.all_students');
const cseStudents = document.querySelector('.cse');
const eceStudents = document.querySelector('.ece');
const placedStudents = document.querySelector('.placed');


function displayStudents(studentList){

  resultContainer.textContent = `${studentList.length} student records founded`;

  if(studentList.length === 0){
    resultContainer.innerHTML = `<p> No student records found </p>`;
  }

  const studentRecords = studentList.map((student)=>{
      return `<article class = "studentplaced ${student.placed ? " " : "studentnotplaced"}">
        <h2> ${student.name} </h2>
        <p> ${student.age} </p>
        <p> ${student.department}</p>
        <p> ${student.cgpa} </p>
        <p> ${student.placed ? "Placed ✅ ":"Not placed ❌ "}
        </article>`;
  } );
   dataContainer.innerHTML = studentRecords.join(" ");

}

allStudents.addEventListener('click',()=>{
    displayStudents(students);
});

cseStudents.addEventListener('click',()=>{
   const cse = students.filter((student)=>{
        return student.department == 'CSE';
   })
   displayStudents(cse);
});

eceStudents.addEventListener('click',()=>{
    const ece = students.filter((student)=>{
        return student.department == 'ECE';
   })
   displayStudents(ece);
});

placedStudents.addEventListener('click',()=>{
    const placed = students.filter((student)=>{
        return student.placed;
   })
   displayStudents(placed);
});

searchInput.addEventListener('input',(event)=>{
   const input = event.target.value.toLowerCase().trim();

   const searchResults = students.filter((student)=>{
       return student.name.toLowerCase().trim().includes(input);
   })
   displayStudents(searchResults);
});