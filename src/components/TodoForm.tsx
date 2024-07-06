import { FormEvent, useState } from "react"

interface TodoFormProps {
    onAdd: (text: string) => void;
}



const TodoForm = ({ onAdd }: TodoFormProps) => {
    
    const [newTodo, setNewTodo] = useState<string>("")



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAdd(newTodo);
        setNewTodo("");
    }


  return (
    <>
    
    <form onSubmit={handleSubmit}>
     <input
     type="text"
     placeholder="New Todo"
     value={newTodo}   
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
    />
    <button type="submit">Add Todo</button>
    </form>  
    </>
  )
}

export default TodoForm