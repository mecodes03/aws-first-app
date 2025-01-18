import React from 'react'

const Todo = ({ title, description, state }: { title: string, description: string, state: 'PENDING' | 'COMPLETED' | 'DROPPED' }) => {
    return (
        <div className='flex text-neutral-50 gap-3 flex-col items-center justify-center bg-slate-800'>
            <h3>{title}</h3>
            <h4 className=''>{description}</h4>
            <div className='text-sm'>{state}</div>
        </div>
    )
}

export { Todo }
