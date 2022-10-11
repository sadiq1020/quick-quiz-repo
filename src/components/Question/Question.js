import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ eachQuestion, showWriteAnswer }) => {
    const { question, correctAnswer, options } = eachQuestion;
    // console.log(correctAnswer);

    const handleRightOrWrong = option => {
        // console.log("clicked");
        if (correctAnswer === option) {
            toast.success("Right Answer!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error("Wrong answer!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    return (
        <div className='mt-5'>
            <div className='ml-5 lg:mx-[30%] font-semibold'>
                <h2>Question: {question}</h2>
                <div onClick={() => showWriteAnswer(correctAnswer)} className='ml-4 lg:ml-[60%]'>
                    <EyeIcon className="hover:cursor-pointer h-5 w-5 text-sky-500" />
                </div>
            </div>
            <div className='flex flex-col items-start ml-5 lg:ml-[32%]'>
                {
                    options.map((option, index) => <Option key={index} option={option} handleRightOrWrong={handleRightOrWrong} ></Option>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;

