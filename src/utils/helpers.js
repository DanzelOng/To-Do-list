function initializeTasks() {
    const isFirstTimeUser = localStorage.getItem('isFirstTimeUser');
    if (isFirstTimeUser === null) {
        localStorage.removeItem('completedTasks');
        localStorage.removeItem('tasks');
        localStorage.setItem('isFirstTimeUser', false);
        return [];
    }
    const storedValue = localStorage.getItem('tasks');
    return storedValue ? JSON.parse(storedValue) : [];
}

function initializeCompletedTasks() {
    const completedTasks = localStorage.getItem('completedTasks');
    const isFirstTimeUser = localStorage.getItem('isFirstTimeUser');

    if (completedTasks === null && isFirstTimeUser === null) {
        initializeTasks();
        return false;
    }

    const storedTasks = localStorage.getItem('tasks');
    return storedTasks
        ? JSON.parse(storedTasks).filter((item) => item.checked).length || false
        : false;
}

export { initializeTasks, initializeCompletedTasks };
