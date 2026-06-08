
import './App.css'
import { Increment,Decrement } from './redux/actions'
import { useSelector,useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state)=> state.counter);
  const dispatch = useDispatch();

  return (
   <>
    <h1>Redux Thunk</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>{dispatch(Increment(dispatch))}}>Increment</button>
    <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
   </>
  )
}

export default App
