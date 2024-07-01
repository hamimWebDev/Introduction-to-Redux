import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store"; // adjust the path according to your file structure
import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          type="button"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white ml-3"
          type="button"
        >
          Increment 5
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          type="button"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
