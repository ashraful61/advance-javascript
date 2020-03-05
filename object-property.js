
const students = [
    {id:1, name: "Omor sunny"},
    {id:2, name:"Maannnaa"},
    {id:3, name:"Moyuri"},
    {id:4, name: "Dipjol"}

]
 const nameArr =[];
const names = students.map(s =>{ 
   const element = s.name;
    nameArr.push(element);
    //console.log(nameArr);
});
console.log(nameArr);

const ids = students.map(s => s.id).filter(x =>x >=3)
console.log(ids);

const biigerId = students.filter(id => id.id>2)
console.log(biigerId)
