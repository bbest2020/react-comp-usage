import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(actions.increment())}>INCREMENT</button>
      <h1>Counter : {counter} </h1>
      <button onClick={() => dispatch(actions.decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(actions.addBy10(10))}>ADDBY10</button>
    </div>
  );
}

export default App;
