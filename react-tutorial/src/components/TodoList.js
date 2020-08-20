import React, {useState} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
const TodoList = () => {

    const [ task, setTask ] = useState( [] );
    const [ completedTask, setCompletedTask ] = useState( [0] );

    const handleAddTask = () => {
        const taskI = document.querySelector('#taskI').value;
        const status = document.querySelector('#status');

        const newTask = {
            taskI,
            status
        };

        setTask((prevState)=>{
            return[
                ...prevState,
                newTask
            ];
        });
    };

    const handleCompletedTask = ( index ) => {
        setCompletedTask( (prevState) =>[
            ...prevState,
            task[index]
        ]);

        handleRemoveTask( index );
    };

    const handleRemoveTask = ( index ) => {
        setTask( (prevState) => {
            return prevState.filter( ( task, i ) => i !== index );
        } );
    };


    return (
        <div>
            <div>
                <>Tareas pendientes = { task.length }</>
                <label htmlFor='taskI'>Tarea:</label>
                <input type='text' id='taskI' />
                <button onClick={ handleAddTask }>Añadir tarea</button>
            </div>
            <ul>
                {
                    task.map( ( task, index ) => (
                        <li key={ index }>
                            { task.taskI }
                            <button onClick={ () => handleRemoveTask( index ) }>Eliminar</button>

                            <button onClick={ () => handleCompletedTask( index ) }>Completa</button>
                        </li>
                    ) )
                }
            </ul>
            <div>
                <>Tareas completas = { completedTask.length }</>
                <ul>
                    {
                        completedTask.map( ( task, index ) => (
                            <li key={  index }>
                                { task.taskI }
                            </li>
                        ) )
                    }
                </ul>
            </div>
        </div>
    );

};

export default TodoList;