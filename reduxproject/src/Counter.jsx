function Counter(){

    const Data = (state={count : 0})=>{ return state.count};
    return (
        <>
            <h1>{Data()}</h1>
        </>
    )
}


export default Counter;