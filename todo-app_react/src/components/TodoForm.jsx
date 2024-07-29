/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)

    const { t } = useTranslation()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value.trim()) {
            setError(true)
            return;
        }

        addTodo(value)
        setValue('')
        setError(false)
    }

    const placeholderText = error ? t('Please enter a task') : t('What is the task today?');

  return (
    <form className="w-full mb-4 flex flex-col sm:flex sm:flex-row" onSubmit={handleSubmit} action="">
        
        <input 
            type="text" 
            className={`
            outline-none 
            bg-transparent border ${error ? 'border-red-500' : 'border-emerald-400'} 
            py-2 px-4 text-white`} 
            value={value}
            placeholder={placeholderText}
            onChange={(e) => {setValue(e.target.value)
                if (error) setError(false)}
            } 
        />
        <button 
            type="submit" 
            className="
                bg-emerald-500 p-025
                cursor-pointer 
                text-white border-none
                hover:bg-emerald-600
                "
        >{t('Add task')}</button>
    </form>
  )
}
