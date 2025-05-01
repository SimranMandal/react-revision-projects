import { useState } from "react"
import "./style.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: inputValue,
                id: Math.floor(Math.random() * 10),
            })
        });

        setInputValue("")
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    }

  return (
    <div className="container">
        <input 
         type="text" 
         placeholder="Add new todo"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
        

        <ul className="todos-list">
            {
                todos.map(({text, id}) => (
                    <li className="todo" key={id}>
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>X</button>
                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default Todo
