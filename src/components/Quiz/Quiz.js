import React from 'react';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { logo, name, total } = quiz;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Quiz;