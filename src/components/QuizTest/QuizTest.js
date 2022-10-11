import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer, toast } from 'react-toastify';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data;
    const { name, questions } = quizTest;
    // console.log(questions);


    const showWriteAnswer = (correctAnswer) => {
        // console.log(correctAnswer);
        toast.info(`Correct Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div className='pt-20'>
            <h2 className='text-3xl text-center font-semibold text-sky-500'>Quiz of <span className='italic'>{name}</span></h2>
            <div>
                {
                    questions.map(eachQuestion => <Question key={eachQuestion.id} eachQuestion={eachQuestion} showWriteAnswer={showWriteAnswer}></Question>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizTest;