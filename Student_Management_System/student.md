```
const studentRecords = studentList.map((student) => {
    return `<article class = "studentplaced ${student.placed ? " " : "studentnotplaced"}">
        <h2>${student.name} </h2>
        <p> ${student.age} </p>
        <p> ${student.department}</p>
        <p> ${student.cgpa} </p>
        <p> ${student.placed ? "Placed ✅ " : "Not placed ❌ "} </p>
        <button data-id = "${student.id}" class="deleteButton"> Delete </button>
        </article>`;
  });
  ```