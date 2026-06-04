export const addstudent = (student)=>{
    return {
        type : "add_student",
        payload : student
    }
}

export const deletestudent = (id)=>{
    return {
        type : "delete_student",
        payload : id
    }
}

export const updatestudent = (student)=>{
    return {
        type : "update_student",
        payload : student
    }
}

// id  : unique
// firstname
// course

// add
// delete
// update



/*
    return {
        type : "add_student",
        payload : {
            id : __,
            fname : __,
            course : __
        }
    }

*/