import React from 'react'
import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    const [taskList, setTaskList] = useState([ ]);
    const [task, setTask] = useState('');
    const onInputChange = (e) => {
        setTask(e.target.value)
    }
    const [count, setCount] = useState(0);
    const handleClick = () => {
        if(task !== '') {
            setTaskList([...taskList, task])
            setTask('')
        } else {
            alert('You have to input a task')
        }
        
        console.log(taskList);
        
    }
    const removeItem = (task) => {
        setTaskList(taskList.filter(e => e !== task))
        console.log(taskList);
    }
/*     const removeItem= (id) => {
        let newValue = taskList.filter((birthday) => birthday.id !== id)
        setTaskList((prevState) => {
        return newValue
    }); */
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className='bg-white rounded py-3' >
                    <form className="w-full max-w-sm" onSubmit={(e) => {
                        e.preventDefault()
                        handleClick()
                    }}>
                        <div className="flex items-center border-b border-teal-500 py-2 ">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Tasks to do" aria-label="Full name" onChange={onInputChange} />
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handleClick}>
                            Add
                            </button>
                            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={() => {
                                setTaskList([])
                            }}>
                            Remove All
                            </button>
                        </div>
                    </form>
                    <ul>
                        {taskList.map((task, id) => {

                            id = count;
                            return <div className='flex items-center justify-between bg-teal-800 rounded mt-2 px-1'>
                                    <li className='text-white'>{ task} </li>
                                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-white text-sm py-1 px-2 rounded" type="button" onClick={() => {
                                        removeItem(task)
                                    }} >
                                    Remove 
                                </button>
                                </div>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default TodoList