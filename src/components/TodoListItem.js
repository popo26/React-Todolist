import { GoTrash } from "react-icons/go";

function TodoListItem({ todo, onDelete }) {

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <div className="card">
            <GoTrash onClick={handleDelete} />
            <div className="card-item">{todo.name}</div>
        </div>
    )
};

export default TodoListItem;