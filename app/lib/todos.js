let todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' }
]

export function getTodos() {
    return todos
}

export function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    return todos
}

export function addTodo(title) {
    const newTodo = { id: todos.length + 1, title }
    todos.push(newTodo)
    return newTodo
}