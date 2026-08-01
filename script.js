const students =[];
 
// const input = document.querySelector('.test_input');
const input = document.querySelector('.textInput');
const addButton = document.querySelector('.addButton');
const body = document.querySelector('body');

const inputAge = document.getElementById('inputAge');
const departmentName = document.getElementById('departmentName');
const resultContainer = document.querySelector('.resultContainer');
const studentContainer = document.querySelector('.studentContainer');

const form = document.querySelector('.parentContainer');

form.addEventListener('submit',(event)=>{
   event.preventDefault();
   if(inputAge.value === ""){return;}
   const studentName = input.value.trim()
   const studentAge = Number(inputAge.value);
   const studentDepartment = departmentName.value.trim();

   if( studentName === "" || studentDepartment === "" ){return;}
   
   const studentObject ={
     id: Date.now(),
     nameInput : studentName,
     age  : studentAge,
     departmentInput : studentDepartment
   }
 students.push(studentObject);
 renderStudent(students);
 
});

function renderStudent(studentList){
   resultContainer.textContent=`${studentList.length} records found`;
  if(studentList.length === 0){return studentContainer.innerHTML=`<p> no student records found </p>`;}

  const studentCard = studentList.map((student)=>{
   return `<article class="studentCard ${student.age > 18 ? "letcheck":"giveTime"}">
           <h2> Name :${student.nameInput}</h2>
            <p> Age :${student.age}</p>
            <p> Department name :${student.departmentInput}</p>
            </article>`
  });

  studentContainer.innerHTML=studentCard.join("");
}

/*
button.addEventListener('click',()=>{
   const newString = input.value.trim();
   console.log(newString);
   if(newString===""){return;}
   arr.push(newString);
   console.log(arr);
   input.value = "";
});
*/


