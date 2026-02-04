import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { increment , decrement , completed} from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch ;
    const count = useSelector((state) => state.counter.value)

  return (
    <>
    <div>{count}</div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(completed())}>Reset</button>
    </>
  )
}

export default Counter