//Falsy: 0, empty string(""),NaN,Null,undefined,let name = false;
//Truthy: " ","0",arr = [], let name = {}; let name ="false", let name = true
const name = NaN ;
// let name;
if (name){
    console.log("conditon is true");
}
else{
    console.log("condition is false")
}