import React from 'react';
import Option from '../Option/Option';

const Question = ({ eachQuestion }) => {
    const { question, options } = eachQuestion;
    // console.log(options);
    return (
        <div className='mt-5'>
            <div className='ml-5 lg:mx-[30%] font-semibold'>
                <h2>Question: {question}</h2>
            </div>
            <div className='flex flex-col items-start ml-5 lg:ml-[32%]'>
                {
                    options.map((option, index) => <Option key={index} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;