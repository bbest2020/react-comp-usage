import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/counter-slice';
import Blog from './Blog';

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.addBlogReducer.blogs);
  console.log("app=>",blogs);
  return (
    <div>
      <button onClick={() => dispatch(counterActions.increment())}>INCREMENT</button>
      <h1>Counter : {counter} </h1>
      <button onClick={() => dispatch(counterActions.decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(counterActions.addBy10(10))}>ADDBY10</button>
    </div>
  );

  // return (
  //   <Blog />
  // )
}

export default App;
