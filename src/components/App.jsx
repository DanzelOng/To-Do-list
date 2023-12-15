import { useState, useEffect } from 'react';
import { ToDoList } from './ToDoList';
import { Footer } from './Footer';
import { SubmitTask } from './SubmitTask';
import { initializeTasks, initializeCompletedTasks } from '../utils/helpers';
import '../app.css';

export default function App() {
    const [value, setValue] = useState('');
    const [tasks, setTask] = useState(() => initializeTasks());

    const [completedTasks, setCompletedTasks] = useState(() =>
        initializeCompletedTasks()
    );

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks, completedTasks]);

    useEffect(() => {
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }, [completedTasks]);

    // derived states
    const numChecked = tasks.filter((task) => task.checked).length;
    const numTask = tasks.length;

    // handle functions
    const handleSetTask = function (val) {
        const newTask = {
            id: crypto.randomUUID(),
            task: val,
            checked: false,
        };
        setTask((t) => [...t, newTask]);
    };

    const handleChecked = function (task, bool) {
        setTask((items) =>
            items.map((item) =>
                item.id === task.id ? { ...item, checked: !bool } : item
            )
        );
        handleUpdateCompletedTasks(!bool);
    };

    const handleDelete = function (task, bool) {
        setTask((items) => items.filter((item) => item.id !== task.id));
        handleUpdateDeletedTask(bool);
    };

    const handleUpdateCompletedTasks = function (bool) {
        if (bool) {
            !completedTasks
                ? setCompletedTasks(1)
                : setCompletedTasks(completedTasks + 1);
        } else {
            if (!completedTasks || completedTasks === 1)
                setCompletedTasks(false);
            else setCompletedTasks(completedTasks - 1);
        }
    };

    const handleUpdateDeletedTask = function (bool) {
        if (bool) {
            if (!completedTasks || completedTasks === 1)
                setCompletedTasks(false);
            else setCompletedTasks(completedTasks - 1);
        }
    };

    return (
        <div className='container'>
            <header className='title-container'>
                <div className='icon-container'>
                    <img src='react.png' alt='react icon' />
                    <h1>To Do List</h1>
                </div>

                <p>{`${numChecked}/${numTask}`}</p>
            </header>

            <ToDoList
                tasks={tasks}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
            />
            <SubmitTask
                value={value}
                handleSubmit={handleSetTask}
                handleSet={setValue}
            />
            <Footer
                numChecked={numChecked}
                numTask={numTask}
                completedTasks={completedTasks}
            />
        </div>
    );
}
