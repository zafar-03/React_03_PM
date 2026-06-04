
import './App.css';
import Counter from './Counter';
import { Increment,Decrement } from './redux/actions';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  var n1 = useSelector((state)=> state.count);
  //  var n1 = useSelector(()=> {});
  const dispatch = useDispatch();

  return (
   <>
    <h1>Redux Toolkit</h1>
    <p>count : {n1}</p>
    <button onClick={()=>{dispatch(Increment())}}>Increment</button>
    <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>

    {/* <Counter/> */}
   </>
  )
}

export default App
