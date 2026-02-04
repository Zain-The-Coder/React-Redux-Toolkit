import { useSelector , useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todosSlice";
import { completedTodo } from "../features/todos/todosSlice";


const Todo = () => {
    let todos = useSelector(state => state.todo.todos);
    console.log(todos);

    const dispatch = useDispatch();
  return (
    <>
    <div className="my-[20px] italic uppercase text-[30px]">My Todos</div>
    {todos.map((todo) => (
      <li key={todo.id}> 
 <div
    key={todo.id} className={`p-4 mb-2 rounded 
      ${ todo.completed ? "bg-green-500" : "bg-white"}`}>{todo.text} 
      <button onClick={() => dispatch(removeTodo(todo.id))}
           className="border p-[3px] rounded-2xl cursor-pointer" >Delete Task</button>
          {!todo.completed && <button onClick={() => dispatch(completedTodo(todo.id))}
           className="border p-[3px] rounded-2xl cursor-pointer" >Completed Task</button>}
        </div>
      </li>
    ))}
    </>
  )
}

export default Todo;