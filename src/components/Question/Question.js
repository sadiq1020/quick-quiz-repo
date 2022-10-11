import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';

const Question = ({ eachQuestion }) => {
    const { question, correctAnswer, options } = eachQuestion;
    console.log(eachQuestion);

    const handleWriteOrWrong = option => {
        // console.log(option);
        if (correctAnswer === option) {
            toast("Right Answer!");
        }
    }

    return (
        <div className='mt-5'>
            <div className='ml-5 lg:mx-[30%] font-semibold'>
                <h2>Question: {question}</h2>
            </div>
            <div className='flex flex-col items-start ml-5 lg:ml-[32%]'>
                {
                    options.map((option, index) => <Option key={index} option={option} handleWriteOrWrong={handleWriteOrWrong}></Option>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;