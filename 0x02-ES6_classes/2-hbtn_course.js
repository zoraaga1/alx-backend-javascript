/* eslint-disable brace-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
export default class HolberonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        else {
            this._name = newName;
        }
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new TypeError('Length must be a number');
        }
        else {
            this._length = newLength;
        }
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new TypeError('Students must be an array');
        }
        else {
            this._students = newStudents;
        }
    }
}
