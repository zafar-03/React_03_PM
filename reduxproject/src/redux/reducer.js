//Intialization 
const intialValue = {
    count: 0
};


const useReducer = (state = intialValue, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };

    }
}
export  default useReducer;



