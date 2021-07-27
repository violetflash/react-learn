import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import Header from './components/Header/Header';
import SearchPanel from "./components/SearchPanel/SearchPanel";

const todoData = [
    {id: 1, label: 'Eat Soup', important: false},
    {id: 2, label: 'Drink Coffee', important: false},
    {id: 3, label: 'Create React App', important: true}
];

const Todo = props => {
    return (
        <>
            <Header/>
            <SearchPanel/>
            <TodoList data={todoData}/>
        </>
    )

};

export default Todo;