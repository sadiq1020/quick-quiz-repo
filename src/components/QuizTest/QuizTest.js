import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizTest = () => {
    const quizTestData = useLoaderData();
    const quizTest = quizTestData.data;
    console.log(quizTest);
    return (
        <div>
            <h2>This is QUIZ TEST</h2>
        </div>
    );
};

export default QuizTest;