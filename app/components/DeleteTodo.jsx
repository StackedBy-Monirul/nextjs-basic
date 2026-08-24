'use client'

import { useRouter } from 'next/navigation'

const DeleteTodo = ({ id }) => {
    const router = useRouter()

    const handleDelete = async () => {
        const response = await fetch('/api/todos', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })

        if (response.ok) {
            router.refresh()
        }
        else {
            throw new Error('Failed to delete todo')
        }
    }

    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleDelete}
        >
            Delete
        </button>
    )
}

export default DeleteTodo