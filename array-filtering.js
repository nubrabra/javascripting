var numbers = [1,2,4,5,6,7,8,9,10];
var explan = [];

function findNumber(number){
  return number === 100;
}

for (var i = 0; i < numbers.length; i++) {
  if (findNumber(numbers[i])) {
    explan.push(numbers[i]);
  }
}

console.log(explan);
