import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todos.reducer';


const defaultTodos = [
    { id: '0', task: 'violin', completed: false},
    { id: '1', task: 'something else', completed: true},
    { id: '2', task: 'make some food', completed: false},
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos] = useReducer(todosReducer, defaultTodos);

    return (
        <TodosContext.Provider value={todos}>
            {props.children}
        </TodosContext.Provider>
    )
}