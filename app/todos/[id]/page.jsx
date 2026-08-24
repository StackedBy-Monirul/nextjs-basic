import { notFound } from 'next/navigation'
import { getTodos } from '../../lib/todos';

const TodoPage = async ({ params }) => {
    const { id } = await params;
    const todos = getTodos()
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