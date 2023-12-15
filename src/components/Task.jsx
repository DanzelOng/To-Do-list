import { useState } from 'react';

export function Task({ item, handleChecked, handleDelete }) {
    const [isChecked, setIsChecked] = useState(() => {
        return item.checked ? item.checked : false;
    });

    const handleBtnClick = function () {
        handleDelete(item, item.checked);
    };

    return (
        <section
            className={`task-container ${
                isChecked || item.checked ? 'dash' : ''
            }`}
        >
            <div className='task'>
                <input
                    type='checkbox'
                    checked={item.checked || isChecked}
                    value={isChecked}
                    onChange={() => {
                        handleChecked(item, isChecked);
                        setIsChecked((isChecked) => !isChecked);
                    }}
                />
                {item.task}
            </div>
            <button className='task-btn' onClick={handleBtnClick}>
                <i className='bx bx-trash-alt'></i>
            </button>
        </section>
    );
}
