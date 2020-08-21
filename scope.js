
let bonus = 20

function sum(first, second){
    let result = first + second + bonus
    console.log(result)//
    console.log(bonus)//20
  
    if(result > 9){
        var mood ="happy"
        console.log(mood)
    }
    // console.log(mood)//ReferenceError: mood is not defined while declaring mood using let keyword and if var it is woorking
    console.log(mood)//happy while var mood
    return result
}

const output = sum(3, 7)
console.log(output) //10
// console.log(mood) // mood is not defined
// console.log(result) // ReferenceError: result is not defined while declaring result using let keyword
console.log(day)//undefined
var day = 'Friday'

console.log(day1)//ReferenceError: day1 is not defined warning 
let day1 = 'Friday'