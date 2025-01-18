'use client'

import React, { FormEvent, useState } from 'react'
import { Todo } from './Todo'

type Todo = { title: string, description: string, state: 'PENDING' | 'COMPLETED' | 'DROPPED' }

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const [todo, setTodo] = useState<Todo>({
        title: '',
        description: 'des',
        state: 'PENDING'
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    console.log(todo)
    const createTodo = () => setTodos(p => [...p, todo])

    return (
        <div className='grid space-x-3 space-y-2'>
            <form onSubmit={handleSubmit} className='grid place-items-center space-x-3 space-y-2'>
                <input className='text-black' placeholder='enter title' value={todo.title} onChange={(e) => { setTodo(p => ({ ...p, title: e.target.value })) }} />
                <input className='text-black' placeholder='enter description' value={todo.description} onChange={(e) => { setTodo(p => ({ ...p, description: e.target.value })) }} />
                <button onClick={createTodo}>create todo</button>
            </form>
            <div>{todos.map(todo => <Todo key={todo.title} {...todo} />)}</div>
        </div>
    )
}

export default Todos
