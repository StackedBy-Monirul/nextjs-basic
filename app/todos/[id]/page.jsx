import { notFound } from 'next/navigation'

const TodoPage = async ({ params }) => {
    const { id } = await params;
    const response = await fetch('http://localhost:3000/api/todos', {
        cache: 'no-store'
    })
    const todos = await response.json()
    const todo = todos.find((item) => item.id === Number(id))

    if (!todo) {
        notFound()
    }

    return (
        <article>
            <h1>{todo.title}</h1>
            <p>Todo ID: {todo.id}</p>
        </article>
    )
}

export default TodoPage