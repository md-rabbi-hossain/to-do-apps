import React, { useState, useEffect } from 'react';
import Getdata from './Getdata'
export default function Todos() {
    const [todos, settodos] = useState(Getdata())
    const [value, setvalue] = useState('');
    const [isedit, setisedit] = useState(false);
    const [upadteid, setupadteid] = useState(0);

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(todos))
    }, [todos]);

    const inputhandler = (e) => {
        setvalue(e.target.value)
    }

    const Todohandler = () => {
        if (value !== '') {
            settodos([...todos, value]);
            setvalue('')
        }
        else {
            alert('emty value')
        }
    }
    const removetodo = (id) => {
        const filtered = todos.filter((todo, index) => id !== index)
        settodos(filtered)
    }

    const getodo = (id) => {
        const findtod = todos.find((todo, index) => id === index)
        setvalue(findtod)
        setisedit(true)
        setupadteid(id)
    }

    const Updatetodo = () => {
        todos[upadteid] = value
        settodos([...todos])
        setisedit(false)
        setvalue('')
    }

    return (
        <>
            <div className="flex justify-center items-center bg-gray-300 min-h-screen">
                <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
                    <div className="input_text relative">
                        <input className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8" type="text" placeholder="Write a new task"
                            value={value}
                            onChange={inputhandler}
                        />
                        <button onClick={isedit ? Updatetodo : Todohandler} className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
                        >
                            {isedit ? 'Update' : 'Add todo'}
                        </button>
                        <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
                    </div>
                    <ul className="all_tasks">
                        {todos.map((item, index) => {
                            return <li id="1" key={index}>
                                <hr className="mt-2" />
                                <div className="my-4 flex justify-between px-1">
                                    <div className="flex items-center gap-2">
                                        <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                                            <i id="checked1" className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"></i>
                                        </span>
                                        <p className="md:max-w-[375px] truncate max-w-[280px] ">
                                            <strike id="strike1" className="text-gray-600 text-sm no-underline ">{item}</strike>
                                        </p>
                                    </div>
                                    <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                                        <i onClick={() => getodo(index)} className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                                    </span>
                                    <span className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                                        <i onClick={() => removetodo(index)} className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                                    </span>
                                </div>
                            </li>
                        })}

                    </ul>
                </div>
            </div>

        </>
    );
}

