

interface TodoItemProps {
    todo: { id: number, text: string };
    onDelete: (id: number) => void;
}



const TodoItem = ({todo, onDelete }: TodoItemProps) => {
  return (
    <>
    <li>
        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
    </>
  )
}

export default TodoItem