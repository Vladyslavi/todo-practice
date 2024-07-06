import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addTodo, deleteTodo } from "./redux/TodoSlice";




export default function App() {
     const todos = useSelector((state: RootState) => state.todos);
     const dispatch = useDispatch();  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm
      onAdd={(text) => dispatch(addTodo(text))} 
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem 
          key={todo.id} todo={todo} onDelete={(id) => dispatch(deleteTodo(id))} />
        ))}
      </ul>
    </div>
  )
}



