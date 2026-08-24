'use client'

import Link from 'next/link';
import DeleteTodo from '../components/DeleteTodo'
import { useEffect, useState } from 'react';

const TodoPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/todos')
            .then(response => response.json())
            .then(setData)
    }, [])

    const removeTodo = (id) => {
        setData(currentTodos => currentTodos.filter(todo => todo.id !== id))
    }

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
                                <DeleteTodo id={todo.id} onDeleted={removeTodo} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section >
    )
}

export default TodoPage