/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Todo({task, toggleComplete, deleteTodo, editTodo}) {

  return (
    <div className="flex  sm:flex sm:flex-row justify-between 
      items-center text-white bg-emerald-700 rounded py-3 px-4 mb-4">
        <p onClick={() => toggleComplete(task.id)}
          className={`hover:line-through hover:text-emerald-900 transition
            ${task.completed ? "completed" : "incompleted"}`
          }
        >
          {task.task}
        </p>
        <div className='flex gap-4 sm:gap-2'>
          <FontAwesomeIcon 
            className='cursor-pointer text-xl sm:text-base hover:text-gray-400 transition' 
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)} 
          />

          <FontAwesomeIcon 
            className='cursor-pointer text-xl sm:text-base hover:text-red-600 transition' 
            icon={faTrash}
            onClick={() => deleteTodo(task.id)} 
          />
        </div>
    </div>
  )
}
