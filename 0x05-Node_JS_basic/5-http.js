const http = require('http');
const fs = require('fs').promises; // Use promise-based fs for async operations
const url = require('url');

// Function to count students from a CSV file
const countStudents = async (databasePath) => {
  try {
    const data = await fs.readFile(databasePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.length > 0);

    if (lines.length === 0) {
      return 'Number of students: 0\n';
    }

    // Exclude the header
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

    let result = `Number of students: ${studentLines.length}\n`;

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentList = fields[field];
        result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const dbPath = query.db || '';

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (pathname === '/students') {
    if (!dbPath) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Database path is required\n');
      return;
    }

    try {
      const studentsList = await countStudents(dbPath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentsList}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`${error.message}\n`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
