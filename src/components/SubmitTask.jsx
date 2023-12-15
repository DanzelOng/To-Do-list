import { useRef } from 'react';

export default function SubmitTask({ value, handleSubmit, handleSet }) {
    const inputRef = useRef(null);

    // handle function - form submission
    const handleFormSubmit = function (e) {
        e.preventDefault();
        if (!value) return;
        handleSubmit(value);
        handleSet('');
        // remove focus from input field
        inputRef.current.blur();
    };

    return (
        <form className='inputTask' onSubmit={(e) => handleFormSubmit(e)}>
            <input
                type='text'
                value={value}
                ref={inputRef}
                onChange={(event) => handleSet(event.target.value)}
                placeholder='Add A New Task'
            />
            <button className='btn' type='submit'>
                <i className='bx bx-send'></i>
            </button>
        </form>
    );
}
