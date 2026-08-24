import { NextResponse } from 'next/server';

let todos = [
    {id: 1, title: 'Todo 1'},
    {id: 2, title: 'Todo 2'},
    {id: 3, title: 'Todo 3'}
]

export async function GET(request) {
    return NextResponse.json(todos)
}

export async function DELETE(request) {
    const data = await request.json();
    todos = todos.filter(todo => todo.id !== data.id);
    return NextResponse.json(todos);
}

export async function POST(request) {
    const data = await request.json();
    const newTodo = {id: todos.length + 1, title: data.todoName};
    todos.push(newTodo);
    return NextResponse.json(newTodo);
}