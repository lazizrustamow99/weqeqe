var steps = +prompt('Введите число');
var first = prompt('Введите символ отступа');
var second = prompt('Введите конечный символ');
if (steps = isNaN){
    steps = 5
}
for (let i = 0; i < steps; i++) {
  var row = first.repeat(i) + second;
  console.log(row);
  alert(row)
    
}