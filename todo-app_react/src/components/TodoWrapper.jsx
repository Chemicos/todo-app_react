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
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
    
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

    const clearTodos = () => {
      setTodos([]);
    };

    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ?
        {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? 
        {...todo, task, isEditing: !todo.isEditing} : todo))
    }
    
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
    };


  return (
    <div className="overflow-hidden sm:border w-4/5 sm:w-full border-emerald-400 sm:px-8 pt-8 sm:pb-4 rounded">
      <div className="flex gap-2 text-white font-semibold justify-end mb-4">
        <button 
          className = {`${currentLanguage === 'ro' ? 'bg-emerald-900' : 'bg-emerald-600'} px-2 py-1 rounded`} 
          onClick={() => changeLanguage('ro')}>RO
        </button>
        <button 
          className = {`${currentLanguage === 'en' ? 'bg-emerald-900' : 'bg-emerald-600'} px-2 py-1 rounded`} 
          onClick={() => changeLanguage('en')}>EN
        </button>
      </div>
      
      <h1 className="text-white text-2xl sm:text-3xl mb-12">{t('Be Productive!')}</h1>
      <TodoForm addTodo={addTodo} />

      <div className="todo-list-container mb-6">
        {todos.map((todo) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo 
              task={todo} 
              key={todo.id} 
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo} 
            />
          )
        ))}
      </div>

    {todos.length > 0 && (
      <button 
        className="bg-emerald-700 text-white font-semibold px-2 py-2 rounded" 
        onClick={clearTodos}>
          {t('Delete all')}
      </button>
    )}
    </div>
  )
}
