var num = +prompt('Введите любое число:');
var power = +prompt('Введите степень этого числа:');
var result = 1;
var count = 1;
while (count <= power){
  result = result * num;
  console.log(result);
  alert(result);
  count++;
}