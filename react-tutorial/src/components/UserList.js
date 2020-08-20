import React, {useState} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';


const UserList = () => {
    const  initialUsers = () =>{
        return [
            {
                firstName: 'Elizabeth',
                lastName: 'Chinacalle'
            },
            {
                firstName: 'Analy',
                lastName: 'Chinacalle'
            },
            {
                firstName: 'Cynthia',
                lastName: 'Chinacalle'
            }
        ];
    };

    const [users, setUsers] = useState(()=> initialUsers());
    const [count, setCount] = useState([0]);

    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    const handleAddUser = () =>{
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;

        const newUser = {
            firstName,
            lastName
        }

        setUsers((prevState)=>{
            return[
                ...prevState,
                newUser
            ];
        });

    };


    return(
        <div>
            { count }
            <button onClick={ () => {setCount( count + 1 );} }>Sumar</button>

            <button onClick = {() => setCount(0)}>Resetear</button>


            <div>
                <label htmlFor = 'firstName'>Nombre</label>
                <input type= 'text' id='firstName'/>

                <label htmlFor = 'lastName'>Apellido</label>
                <input type= 'text' id='lastName'/>

                <button onClick={handleAddUser}> Agregar usuario</button>

            </div>

            <ul>
                {
                    users.map(( user, index )=>{
                        return <li key={`user-${index}`}>
                            {formatName(user)}

                        </li>;
                    })
                }

            </ul>
        </div>
    )
};

export default UserList;