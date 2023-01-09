import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
      <h1>Counter : {counter} </h1>
      <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      <button onClick={() => dispatch({type: "ADDBY10", payload: 10})}>ADDBY10</button>
    </div>
  );
}

export default App;
