/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
export default function appendToEachArrayValue(array, appendString) {
    for (let i = 0; i < array.length; i++) {
      array[i] = appendString + array[i];
    }
  
    return array;
  }
  