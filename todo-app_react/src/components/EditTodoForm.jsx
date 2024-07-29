/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task)

    const { t } = useTranslation()

    const handleSubmit = (e) => {
        e.preventDefault()

        editTodo(value, task.id)

        setValue('')
    }

  return (
    <form className="w-full mb-4 flex flex-col sm:flex" onSubmit={handleSubmit} action="">
        <input 
            type="text" 
            className="
            outline-none 
            bg-transparent border border-emerald-400 
            py-2 px-4 text-white
            " 
            value={value}
            placeholder={t('Update Task')}
            onChange={(e) => setValue(e.target.value)} 
        />

        <button 
            type="submit" 
            className="
                bg-emerald-400 p-025
                cursor-pointer 
                text-white border-none
                hover:bg-emerald-600
                "
        >{t('Update')}</button>
    </form>
  )
}
