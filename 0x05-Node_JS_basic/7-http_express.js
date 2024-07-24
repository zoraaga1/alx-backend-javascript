const express = require('express');
const fs = require('fs');

const app = express();

// Function to read the CSV file and count students
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const fields = {};
      let totalStudents = 0;

      lines.forEach((line, index) => {
        if (index === 0) return; // Skip header
        const [firstname, , , field] = line.split(',');
        if (!field) return; // Skip empty lines
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
        totalStudents += 1;
      });

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, students] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students URL
app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\n');
    return;
  }

  try {
    const studentInfo = await countStudents(database);
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or further use
module.exports = app;
