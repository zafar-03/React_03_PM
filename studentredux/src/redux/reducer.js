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
            return ["Temp"];
        case "update_student": 
            return ["Temp"];
        default : 
        return state;
    }
}


export default createReducer;

// add   kuch data id,name,course