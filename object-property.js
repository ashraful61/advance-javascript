
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
    });
    console.log(nameArr);//[ 'Omor sunny', 'Maannnaa', 'Moyuri', 'Dipjol' ]


   const names_arr = students.map(s => s.name)
   console.log(names_arr);//[ 'Omor sunny', 'Maannnaa', 'Moyuri', 'Dipjol' ]


   const ids_arr = students.map(s => s.id)
   console.log(ids_arr);//[ 1, 2, 3, 4 ]


    const ids = students.map(s => s.id).filter(x =>x >=3)
    console.log(ids);//[ 3, 4 ]


    const id = students.filter(x =>x.id >=3)
    console.log(id);//[ { id: 3, name: 'Moyuri' }, { id: 4, name: 'Dipjol' } ]

    const biggerId = students.filter(id => id.id>2)
    console.log(biggerId)//[ { id: 3, name: 'Moyuri' }, { id: 4, name: 'Dipjol' } ]


    const id_bigger_one_first = students.find(x =>x.id >1)
    console.log(id_bigger_one_first);//{ id: 2, name: 'Maannnaa' }
