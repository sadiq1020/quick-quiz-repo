import React from 'react';

const Option = ({ option, handleRightOrWrong }) => {

    return (
        <div className={'bg-sky-100 m-1 py-2 px-4 rounded-md border-solid border-2 border-sky-300 w-72 lg:w-96'} >
            <div>
                <input onClick={() => handleRightOrWrong(option)} type="radio" value="answer" name="answer" /> {option}
            </div>
        </div >
    );
};

export default Option;
