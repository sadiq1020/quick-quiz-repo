import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data;
    // console.log(quiz);
    return (
        <div>
            <div className='flex flex-col  md:flex flex-row justify-center items-center sm:mx-20'>
                <div className='w-48'>
                    <img src="https://img.freepik.com/premium-vector/quiz-logo-isolate-white-questionnaire-icon-poll-sign-flat-bubble-speech-symbol_185004-212.jpg" alt="" />
                </div>
                <div className='mx-20 text-start'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam similique qui! Sapiente odio natus, exercitationem maxime sunt aut veniam quod atque necessitatibus pariatur corrupti iusto deserunt voluptas in ratione?</h2>
                </div>
            </div>
            <div>
                {
                    quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz} ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;