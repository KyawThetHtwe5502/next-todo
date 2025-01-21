"use client"

import createTask from '@/actions/createTask'
import React, { useActionState } from 'react'

const CreateForm = () => {
  const [state, formAction, isPending] = useActionState(createTask);
  return (
    <form action={formAction}>
        <div className='flex justify-between items-center mb-5'>
            <input type="text" name='title' className='grow border border-black p-3' required />
            <button className=' p-3 bg-black text-white'>Save</button>
        </div>
    </form>
  )
}

export default CreateForm