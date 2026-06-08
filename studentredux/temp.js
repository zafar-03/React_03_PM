var data = {
    students : [
        { id : 1 , fname : "Raj"},
        { id : 2 , fname : "Rajan"}
    ]
}

var d = 2;

data = {
    students : data.students.filter((s)=>{
        return (s.id != d)
    })
}

console.log(data);