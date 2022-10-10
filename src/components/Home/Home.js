import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data;
    // console.log(quiz);
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center md:mx-20'>
                <div className='w-72'>
                    <img src="https://img.freepik.com/premium-vector/quiz-logo-isolate-white-questionnaire-icon-poll-sign-flat-bubble-speech-symbol_185004-212.jpg" alt="" />
                </div>
                <div className='mx-20 text-start'>
                    <h2>Quizzes like these will encourage your's self awareness of progress and self assessment. By taking quizzes, you will get instant feedback on your responses. And this can help you identify areas you need to develop yourselves and highlight progress for you to be proud of.</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-2 mt-5 mx-5 lg:grid-cols-4 gap-4'>
                {
                    quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz} ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;