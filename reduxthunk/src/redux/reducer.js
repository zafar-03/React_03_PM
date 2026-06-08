const initialValue = {
    counter : 0
}

const createReducer = (state=initialValue,action)=>{
    switch(action.type){
        case 'inc' : 
            console.log("Data Loaded");
            return {
                ...state,
                counter : state.counter+1
            };
        case 'dec' : 
            return {
                ...state,
                counter : state.counter-1
            };
        default :
            return state;
    }
} 

export default createReducer;