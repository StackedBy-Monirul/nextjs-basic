import { NextResponse } from 'next/server';
import { addTodo, deleteTodo, getTodos } from '../../lib/todos';

export async function GET() {
    return NextResponse.json(getTodos())
}

export async function DELETE(request) {
    const data = await request.json();
    return NextResponse.json(deleteTodo(Number(data.id)));
}

export async function POST(request) {
    const data = await request.json();
    return NextResponse.json(addTodo(data.todoName));
}