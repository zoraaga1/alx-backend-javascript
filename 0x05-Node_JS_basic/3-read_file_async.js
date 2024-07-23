const fs = require('fs').promises; // Use promise-based fs

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.length > 0);

      if (lines.length === 0) {
        console.log('Number of students: 0');
        return;
      }

      const studentLines = lines.slice(1);

      const fields = {};

      studentLines.forEach((line) => {
        const student = line.split(',');
        const name = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      });

      console.log(`Number of students: ${studentLines.length}`);

      // Print the number of students and their names for each field
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentList = fields[field];
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
