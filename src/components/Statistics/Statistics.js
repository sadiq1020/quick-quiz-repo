import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const quizzes = quizData.data;
    console.log(quizzes);

    return (
        <div className='w-[90%] lg:w-[40%] h-96 mt-10'>
            <h2 className='text-2xl text-sky-600 text-center my-6'><strong>Bar chart</strong> of total quiz questions of each topic</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={400} height={200} data={quizzes}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;