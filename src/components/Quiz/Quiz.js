import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    // console.log(quiz);
    const { logo, name, total, id } = quiz;
    return (
        <div className='m-10 p-5 bg-blue-200 border-solid border-2  border-sky-500 rounded-lg'>
            <img src={logo} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <h3 className='text-3xl'>{name}</h3>
                <p>Questions: {total}</p>
            </div>
            <button className='border-solid border-2 border-sky-500 rounded mt-5 py-2 px-5 bg-sky-300 hover:bg-sky-500 hover:text-white'><Link to={`/quiz/${id}`}>Start Quiz</Link></button>
        </div>
    );
};

export default Quiz;