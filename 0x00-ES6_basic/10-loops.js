/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const value of array) {
      newArray.push(appendString + value);
    }
    return newArray;
}
  