import { useState } from 'react';

function CreateTodo({ onCreate }) {

    const [todo, setTodo] = useState("");


    const handleChange = ((e) => {
        setTodo(e.target.value)
    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        onCreate(todo);
        setTodo("");
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    )
};

export default CreateTodo;