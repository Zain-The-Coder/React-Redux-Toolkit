import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

export const AddTodo = () => {

  const [value , setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    dispatch(addTodo(value));
    setValue("");
  }

  return (
    <>
    <form onSubmit={handleSubmit}
     className='flex flex-col w-[70%] rounded-2xl p-[10px] gap-[10px] shadow-2xl m-auto'>
      <input value={value} onChange={(e) => {setValue(e.target.value)}}
      type="text" name='text' placeholder='Enter Your Todo' 
      className='text-[30px] font-bold italic capitalize border border-gray-50'/>
      <button className='border px-[10px] py-[3px] uppercase font-bold cursor-pointer'>Add Todo</button>
    </form>
    </>
  )
}
