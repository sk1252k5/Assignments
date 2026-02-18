const modal=document.getElementById("registrationModal");
const btn=document.getElementById("registerBtn");
const span=document.getElementById("closeModal");

btn.onclick=()=>modal.style.display="block";
span.onclick=()=>modal.style.display="none";

document.getElementById("registrationForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("studentName").value;
const email=document.getElementById("email").value;
const course=document.getElementById("course").value;
const age=document.getElementById("age").value;

const student={name,email,course,age};

let students=JSON.parse(localStorage.getItem("students"))||[];
students.push(student);
localStorage.setItem("students",JSON.stringify(students));

this.reset();
modal.style.display="none";
loadStudents();

});

function loadStudents(){

const students=JSON.parse(localStorage.getItem("students"))||[];
const tableBody=document.getElementById("studentsTableBody");
const tableContainer=document.getElementById("tableContainer");

tableBody.innerHTML="";

if(students.length>0){
tableContainer.style.display="block";

students.forEach((student,index)=>{

const row=document.createElement("tr");

row.innerHTML=`
<td>${index+1}</td>
<td>${student.name}</td>
<td>${student.email}</td>
<td>${student.course}</td>
<td>${student.age}</td>
<td>
<button onclick="deleteStudent(${index})">Delete</button>
</td>
`;

tableBody.appendChild(row);

});
}else{
tableContainer.style.display="none";
}

}

function deleteStudent(index){

if(confirm("Are you sure to delete this student?")){

let students=JSON.parse(localStorage.getItem("students"))||[];
students.splice(index,1);
localStorage.setItem("students",JSON.stringify(students));
loadStudents();

}

}

window.onload=loadStudents;

const navToggle=document.getElementById("navToggle");
const navLinks=document.getElementById("navLinks");

navToggle.addEventListener("click",()=>{
navLinks.classList.toggle("show");
});
