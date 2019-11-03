import React from 'react';
import useStyles from '../styles/AppStyles';
import TodoApp from './TodoApp';

function App(){
    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h1>
                    to<span>do</span>
                </h1>
                <TodoApp />
                <h2>
                    Do these things.
                </h2>
            </header>
        </div>
    )
}


export default App;