let students = [];
let editStudentId = null;

const searchInput = document.querySelector(".search_input");
const dataContainer = document.querySelector(".dataContainer");
const resultContainer = document.querySelector(".resultContainer");
const form = document.querySelector('form');

const allStudents = document.querySelector(".all_students");
const cseStudents = document.querySelector(".cse");
const eceStudents = document.querySelector(".ece");
const placedStudents = document.querySelector(".placed");

const inputAge = document.getElementById('inputAge');
const departmentName = document.getElementById('departmentName');
const userInput = document.querySelector('#textInput');
const addButton = document.querySelector('.addButton');

form.addEventListener('submit',(event)=>{

   event.preventDefault();

   if(inputAge.value === "" || userInput.value === "" ||departmentName.value==="" ){return;}
   const studentName = userInput.value.trim()
   const studentAge = Number(inputAge.value);
   const studentDepartment = departmentName.value.trim();

   
   const studentObject ={
     id: Date.now(),
     name : studentName,
     age  : studentAge,
     department : studentDepartment
   }

students.push(studentObject);

  userInput.value ="";
  inputAge.value = "";
  departmentName.value="";
});


dataContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {

    const targetStudent = Number(event.target.dataset.id);
    students = students.filter((student) => {
      return student.id !== targetStudent;
    });


    displayStudents(students);
  }
   if (event.target.classList.contains("editButton")){
      const editStudent = Number(event.target.dataset.id);
      editStudentId = editStudent;
      displayStudents(students);
  
    }
    if (event.target.classList.contains("saveButton")){

       const studentCard = event.target.closest('article');
       let newName = studentCard.querySelector('.editName').value;
       let newAge=Number(studentCard.querySelector('.editAge').value);
       let newDepartment = studentCard.querySelector('.editDepartment').value;
      //  const saveStudent = Number(event.target.dataset.id);
       const savedData = students.find((student)=>{
           return (student.id === editStudentId);
       });
       savedData.name = newName;
       savedData.age = newAge;
       savedData.department = newDepartment;
       editStudentId=null;
       displayStudents(students);
    }
    if (event.target.classList.contains("cancelButton")){
      editStudentId=null;
      displayStudents(students);
    }
});

function displayStudents(studentList) {
  resultContainer.textContent = `${studentList.length} student records founded`;

  if (studentList.length === 0) {
    resultContainer.innerHTML = `<p> No student records found </p>`;
  }

  const studentRecords = studentList.map((student) => {
    if (student.id === editStudentId) {
     return `
       <article>
             <input type="text" class="editName" value= "${student.name}" required>
             <input type="number" class="editAge" value= "${student.age}" required>
             <input type="text" class="editDepartment" value= "${student.department}" required>
             <button data-id="${student.id}" class="saveButton"> Save </button>
             <button data-id="${student.id}" class="cancelButton"> Cancel </button>
       </article>`;
      }
    return `<article>
        <h2>${student.name} </h2>
        <p> ${student.age} </p>
        <p> ${student.department}</p>
        <button data-id = "${student.id}" class="deleteButton"> Delete </button>
        <button data-id = "${student.id}" class="editButton"> Edit </button>
        </article>`;
  });
  dataContainer.innerHTML = studentRecords.join(" ");
}


allStudents.addEventListener("click", () => {
  displayStudents(students);
});

cseStudents.addEventListener("click", () => {
  const cse = students.filter((student) => {
    return student.department.toLowerCase() == "cse";
  });
  displayStudents(cse);
});

eceStudents.addEventListener("click", () => {
  const ece = students.filter((student) => {
    return student.department.toLowerCase() == "ece";
  });
  displayStudents(ece);
});

// placedStudents.addEventListener("click", () => {
//   const placed = students.filter((student) => {
//     return student.placed;
//   });
//   displayStudents(placed);
// });

searchInput.addEventListener("input", (event) => {
  const input = event.target.value.toLowerCase().trim();

  const searchResults = students.filter((student) => {
    return student.name.toLowerCase().trim().includes(input);
  });
  displayStudents(searchResults);

});
