"use client"
import { useEffect, useState } from "react"
import TodoForm from "../components/TodoForm"

const TodoList = () => {
    const [todos,setTodos] = useState([])
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    const handleAdd = (text) => {        
        if(!text || !text.trim()) return;
        const newTodo = {
            id:Date.now(),
            text,
        }
        setTodos((prev) => [...prev,newTodo])
    }

    console.log(todos);

    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    console.log(todos.id);
    
    const startEditing = (todo) => {
       setEditingId(todo.id)
       setEditingText(todo.text)
    };

    const cancelEditing = () => {
        setEditingId(null)
        setEditingText("")
    }

    const saveEditing = () => {
        setTodos((prev) => 
          prev.map((todo) => 
           todo.id === editingId ? {...todo,text:editingText} : todo
        )
        );
        setEditingId(null)
        setEditingText("")
    }
    return(
        <div className="max-w-lg" onSubmit={handleAdd()}>
            <TodoForm onNewTodo={handleAdd}/>
            <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-4 border-b pb-1"
          >
            {editingId === todo.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="border px-2 py-1 rounded"
                />
                <button onClick={saveEditing} className="text-green-600">
                  Պահպանել
                </button>
                <button onClick={cancelEditing} className="text-gray-600">
                  Չեղարկել
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button
                  onClick={() => startEditing(todo)}
                  className="text-blue-600"
                >
                  Խմբագրել
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-600"
                >
                  Ջնջել
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default TodoList