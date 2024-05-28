/* eslint-disable prefer-destructuring */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable generator-star-spacing */
/* eslint-disable indent */
export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
  
    return {
      *[Symbol.iterator]() {
        for (const department of Object.values(allEmployees)) {
          for (const employee of department) {
            yield employee;
          }
        }
      },
    };
  }
