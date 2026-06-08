const initialValue = {
    students : []
}

const createReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "add_student": 
            return {
                students : [...state.students,action.payload]
            };
        case "delete_student": 
            return {
                students : state.students.filter((student)=>{
                   return student.id != action.payload 
                })
            };
        case "update_student": 
        var newcourse = "App";
            return {
                students : state.students.map((student)=>{
                   return (student.id == action.payload.id) ? {...student,course : newcourse} : student;
                })
            }
        default : 
        return state;
    }
}


export default createReducer;

// add   kuch data id,name,course