const numbers =[50,2,3,4,5,6,7,10];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output)//[ 2500, 4, 9, 16, 25, 36, 49, 100 ]



function square(element){
    return element*element;
}
const result = numbers.map(square)
console.log(result);//[ 2500, 4, 9, 16, 25, 36, 49, 100 ]



const result2 = numbers.map(x=> x * x);
console.log(result2)//[ 2500, 4, 9, 16, 25, 36, 49, 100 ]



const result3 = numbers.map(function(x,a,b){  //x = element, a=index, b=array
    console.log(x,a,b)
});
console.log(result3);


const result4 = numbers.filter((x) => x>5)
console.log(result4)//[ 50, 6, 7, 10 ]

const result5 = numbers.find((x) => x>5)
console.log(result5)//50