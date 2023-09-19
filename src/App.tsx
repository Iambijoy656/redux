

import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex  m-5">
        <div className="bg-gray-200 p-2 ">
          <button onClick={() => dispatch(increment())}>increment</button>
        </div>{" "}
        <div className="bg-gray-200 p-2 mx-2 ">
          <button onClick={() => dispatch(incrementByAmount(5))}>
            increment By Amount
          </button>
        </div>
        <div className="px-4">{count}</div>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-gray-200 p-2"
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
