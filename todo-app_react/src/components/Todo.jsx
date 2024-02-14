/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Todo({task, toggleComplete, deleteTodo, editTodo}) {

  return (
    <div className="flex flex-col  sm:flex sm:flex-row justify-between 
      items-center text-white bg-emerald-700 rounded py-3 px-4 mb-4">
        <p onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}
        </p>
        <div>
          <FontAwesomeIcon 
            className='cursor-pointer' 
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon 
            className='cursor-pointer ml-3' 
            icon={faTrash}
            onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
