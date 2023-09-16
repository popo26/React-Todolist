import TodoListItem from "./TodoListItem";


function TodoList({todos, onDelete, id}) {

    const renderedTodos = todos.map((todo) => {
        return (
            <TodoListItem key={todo.id} todo={todo} onDelete={onDelete}/>
        );
    })

    return (
        <div className="flex-container">
            {renderedTodos}
        </div>
    )
};

export default TodoList;