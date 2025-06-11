// App.jsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className={`px-4 py-2 text-white rounded  ${count <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}  disabled={count <= 0}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
