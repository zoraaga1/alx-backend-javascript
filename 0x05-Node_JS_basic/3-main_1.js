const countStudents = require('./3-read_file_async');

// eslint-disable-next-line quotes
countStudents("database.csv")
  .then(() => {
    // eslint-disable-next-line quotes
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
// eslint-disable-next-line quotes
console.log("After!");
