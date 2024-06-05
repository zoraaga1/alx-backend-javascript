interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Students = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "New York",
};
const student2: Students = {
  firstName: "Sara",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const studentsList: Students[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);