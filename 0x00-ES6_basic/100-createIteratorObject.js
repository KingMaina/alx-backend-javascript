export default function createIteratorObject(report) {
 // const iterator_ = [];
  //for (const [key, value] of report.allEmployees) {
//    iterator.push(value);
  //}
//  return iterator_
  return Object.values(report.allEmployees).flat(Infinity);
}
