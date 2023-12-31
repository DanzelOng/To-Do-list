import Task from './Task';

export default function ToDoList({ tasks, handleChecked, handleDelete }) {
    return (
        <section className='scroll-section'>
            {tasks.map((item) => (
                <Task
                    item={item}
                    key={item.id}
                    handleChecked={handleChecked}
                    handleDelete={handleDelete}
                />
            ))}
        </section>
    );
}
