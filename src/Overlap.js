var data = [
  { id: 1, startDate: "01/01/2020", endDate: "05/10/2020" },
  { id: 2, startDate: "04/04/2019", endDate: "06/24/2019" },
  { id: 3, startDate: "05/25/2019", endDate: "06/24/2019" },
  { id: 4, startDate: "06/01/2020", endDate: "08/24/2020" }
];
data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
console.log("ascending", data);
var status;
for (var i = 0; i < data.length; i++) {
  for (var j = i + 1; j < data.length; j++) {
    let firstStart = new Date(data[i].startDate);
    let firstEnd = new Date(data[i].endDate);
    let secondStart = new Date(data[j].startDate);
    let secondEnd = new Date(data[j].endDate);
    console.log("1", firstStart, firstEnd, secondStart, secondEnd);
    if (
      (firstStart > secondStart && firstStart > secondEnd) ||
      (firstEnd < secondStart && firstEnd < secondEnd)
    ) {
      console.log("not overlap");
    } else {
      console.log("overlap");
      i = data.length;
      j = data.length;
    }
  }
}
console.log(status);
