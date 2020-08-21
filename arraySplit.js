const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(3,5) 
// console.log(part);//[ 4, 5 ]


// // const removed = nums.splice(2,3)
// const removed = nums.splice(2,3,77,78,79)//
// console.log(removed)//[ 3, 4, 5 ]

// console.log(nums)//[ 1, 2, 77, 78, 79, 6, 7, 8 ]
// // const parts = nums.splice(1,4);
//console.log(parts)
//console.log(nums);
// const together = nums.join("") //12345678
// const together = nums.join(" ") //1 2 3 4 5 6 7 8
// const together = nums.join(",")//1,2,3,4,5,6,7,8
// const together = nums.join("Ami") // 1Ami2Ami3Ami4Ami5Ami6Ami7Ami8
const together = nums.join(" Ami ")
console.log(together) //1 Ami 2 Ami 3 Ami 4 Ami 5 Ami 6 Ami 7 Ami 8