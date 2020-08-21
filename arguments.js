function add(num1, num2){
        //arguments array like object
        console.log(arguments)//[Arguments] { '0': 5, '1': 6, '2': 9 }
        console.log(...arguments)//5 6 9
        console.log([...arguments])// [5 6 9] convert agument to array 
        return num1 + num2 + arguments[2];
}
const result = add(5,6,9);
console.log(result)//20