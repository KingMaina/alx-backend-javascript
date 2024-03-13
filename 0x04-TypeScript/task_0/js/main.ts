interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

// Create 2 students
const student1: Student = {
    firstName: "James",
    lastName: "Mpishi",
    age: 32,
    location: "Mombasa"
};
const student2: Student = {
    firstName: "Felishia",
    lastName: "Mwerevu",
    age: 22,
    location: "Eldoret"
};

const tableHeaders = ['Student First Name', 'Student Location'];
const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement('table');
table.style.borderStyle = 'dotted';
table.style.borderColor = 'orange';

const tableHeader: HTMLTableSectionElement = table.createTHead();

// create header rows
const tableHeaderRow = tableHeader.insertRow(0); // Header row
// tableHeader.style.backgroundColor = "gray";
tableHeader.style.color = "blue";

for (let i = 0; i < tableHeaders.length; i++) {
    const tableHeaderStudentNameCell = tableHeaderRow.insertCell(i);
    tableHeaderStudentNameCell.innerHTML = tableHeaders[i];
}

// Body
const tableBody = table.createTBody();
tableBody.style.backgroundColor = ""

// Create student rows
for (let i = 0; i < studentsList.length; i++) {
    const row = tableBody.insertRow(i);
    const studentFirstNameCell = row.insertCell(0);
    const studentLocationCell = row.insertCell(1);

    studentFirstNameCell.innerHTML = studentsList[i].firstName;
    studentLocationCell.innerHTML = studentsList[i].location;
}
document.body.appendChild(table);
console.log(table);