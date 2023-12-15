export default function Footer({ numChecked, numTask, completedTasks }) {
    return (
        <footer className='footer'>
            {numChecked === 0 && numTask === 0 && 'Start Adding Tasks!'}
            {numTask > 0 &&
                completedTasks < numTask &&
                `You have completed ${numChecked} of ${numTask} tasks!`}
            {completedTasks === numTask && 'You have completed all tasks!'}
        </footer>
    );
}
