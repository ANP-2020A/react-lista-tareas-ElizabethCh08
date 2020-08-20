import React, {useState} from 'react';
import logo from '../images/logo.svg';
import UserList from './UserList';
import '../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
    return(
        <>
            <UserList/>
            <TodoList/>

        </>
    )

}

export default App;
