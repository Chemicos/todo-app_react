/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const { t } = useTranslation()

    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo(value)

        setValue('')
    }

  return (
    <form className="w-full mb-4 flex flex-col sm:flex sm:flex-row" onSubmit={handleSubmit} action="">
        <input 
            type="text" 
            className="
            outline-none 
            bg-transparent border border-emerald-400 
            py-2 px-4 text-white " 
            value={value}
            placeholder={t('What is the task today?')}
            onChange={(e) => setValue(e.target.value)} 
        />

        <button 
            type="submit" 
            className="
                bg-emerald-400 p-025
                cursor-pointer 
                text-white border-none
                "
        >{t('Add task')}</button>
    </form>
  )
}
