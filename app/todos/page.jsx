import Link from 'next/link';
import DeleteTodo from '../components/DeleteTodo'
import { Suspense } from 'react';
import { getTodos } from '../lib/todos';

const TodoPage = async () => {
    const data = getTodos();

    return (
        <section className="mt-24 w-full h-full flex justify-center">
            <table className="w-1/2 border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(todo => (
                        <tr key={todo.id}>
                            <td className="border border-gray-300 px-4 py-2"><Link href={`/todos/${todo.id}`}>{todo.id}</Link></td>
                            <td className="border border-gray-300 px-4 py-2">{todo.title}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <DeleteTodo id={todo.id} />
                                </Suspense>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section >
    )
}

export default TodoPage