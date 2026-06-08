export const Increment = (dispatch) => {
    console.log("Data Loading");
    return  setTimeout(() => {
        return dispatch({
            type: "inc"
        });
    }, 5000);
}

export const Decrement = () => {
    return setTimeout(() => {
        return {
            type: "dec"
        }
    }, 5000);
}
