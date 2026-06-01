
import './App.css';
import { Increment,Decrement } from './redux/actions';

function App() {

  return (
   <>
    <h1>Redux Toolkit</h1>

    <button onClick={()=>{Increment()}}>Increment</button>
    <button onClick={()=>{Decrement()}}>Decrement</button>

   </>
  )
}

export default App
