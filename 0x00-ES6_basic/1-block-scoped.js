/* eslint-disable vars-on-top */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line block-scoped-var
  var task = false;
  // eslint-disable-next-line block-scoped-var
  var task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-redeclare
    task = true;
    // eslint-disable-next-line no-redeclare
    task2 = false;
  }

  // eslint-disable-next-line block-scoped-var
  return [task, task2];
}
