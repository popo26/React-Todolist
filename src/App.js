import { useState } from 'react';
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { nanoid } from 'nanoid';
import TodoListItem from './components/TodoListItem';

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = ((todo) => {
        const updatedTodos = [
            ...todos,
            { id: nanoid(), name: todo }
        ];
        setTodos(updatedTodos)
        console.log(todos)
    });

    const handleDelete = (id) => {
        console.log("Deleting");
        setTodos(prevTodos => {
            return prevTodos.filter(todo => {
                return todo.id !== id;
            })
        })
    }

    const monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    const date = `${new Date().getDate()} ${monthNames[new Date().getMonth()]} ${new Date().getFullYear()} `

    return (
        <div>
            <h1>{date}</h1>
            <CreateTodo onCreate={addTodo} />
            <TodoList todos={todos} onDelete={handleDelete} />
        </div>
    )
};

export default App;