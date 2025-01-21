"use client"

import deleteTasks from '@/actions/deleteTasks'
import React, { useActionState } from 'react'

const DeleteForm = ({id}) => {
    const [state, formAction ,isPending] = useActionState(deleteTasks)
  return (
    <form action={formAction}>
        <input type='hidden' name='id' value={id} />
        <button type='submit' className='text-red-600 underline'>delete..</button>
    </form>
  )
}

export default DeleteForm