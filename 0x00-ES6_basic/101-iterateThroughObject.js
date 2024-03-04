export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    if (reportWithIterator.indexOf(employee) === reportWithIterator.length - 1) {
      result += employee;
    } else {
      result += `${employee} | `;
    }
  }
  return result;
}
