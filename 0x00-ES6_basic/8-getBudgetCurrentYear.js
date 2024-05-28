/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
  
export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
  
