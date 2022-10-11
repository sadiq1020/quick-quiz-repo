import React, { useState } from 'react';

const Option = ({ option }) => {

    // const handleQuizAnswers = () => {

    // }

    // let [color, setColor] = useState(false);

    return (
        <div className={'bg-sky-100 m-1 py-2 px-4 rounded-md border-solid border-2 border-sky-300 lg:w-96'} >
            <div>
                {/* <input type="radio" name="answer" id="answer" />
                <label for="answer"> {option}</label> */}
                <input type="radio" value="answer" name="answer" /> {option}
                {/* <button>{option}</button> */}

            </div>
        </div >
    );
};

export default Option;

// onClick={handleQuizAnswers()}  text-start

// className='bg-sky-100 m-1 py-2 px-4 rounded-md border-solid border-2 border-sky-300 lg:w-96'

// className={color ? "bg-sky-500 m-1 py-2 px-4 rounded-md border-solid border-2 border-sky-300 lg:w-96" : "bg-sky-100 m-1 py-2 px-4 rounded-md border-solid border-2 border-sky-300 lg:w-96"
// setColor(!color)}