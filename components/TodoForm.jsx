"use client"

import { useState } from "react"

const TodoForm = ({onNewTodo}) => {
    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!text.trim()) return;

        setLoading(true)
        onNewTodo(text)
        setText("")
        setLoading(false)
    }
    return(
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Նոր Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Ավելացնել
      </button>
    </form>
    )
}

export default TodoForm 