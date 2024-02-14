/* eslint-disable react/jsx-key */
import { useState } from "react"
import TodoForm from "./TodoForm"
import { useTranslation } from "react-i18next"
import i18n from "../i18n"
import { v4 as uuidv4 } from "uuid"
import Todo from "./Todo"
import EditTodoForm from "./EditTodoForm"
uuidv4();

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])
    
    const { t } = useTranslation()

    const addTodo = (todo) => {
        setTodos([
            ...todos, 
            { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
    }

    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? 
          { ...todo, completed: !todo.completed } : todo
        )
      );
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ?
        {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? 
        {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className="border w-4/5 sm:w-full border-emerald-400 px-8 pt-8 pb-4 rounded">
      <div className="flex gap-1 text-white justify-end mb-4">
        <button className="bg-emerald-600 px-2 rounded" onClick={() => i18n.changeLanguage('ro')}>RO</button>
        <button className="bg-emerald-600 px-2 rounded" onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
      <h1 className="text-white text-2xl sm:text-3xl mb-12">{t('Be Productive!')}</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo 
            task={todo} 
            key={todo.id} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} />
        )
      ))}
    </div>
  )
}
