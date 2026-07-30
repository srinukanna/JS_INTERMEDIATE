const arr =[];

const input = document.querySelector('.test_input');
const button = document.querySelector('.addButton');
const body = document.querySelector('body');

console.log(input.value);

button.addEventListener('click',()=>{
   const newString = input.value.trim();
   console.log(newString);
   if(newString===""){return;}
   arr.push(newString);
   console.log(arr);
   input.value = "";
});