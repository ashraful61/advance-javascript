const numbers =[50,2,3,4,5,6,7,10];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
function square(element){
    return element*element;
}

const result = numbers.map(function(x,a,b){
    console.log(x,a,b)
});
const result = numbers.map(x=> x * x);

const result = numbers.map(x=> x * x);

console.log(result);
const result = numbers.filter((x) => x>5)
console.log(result)