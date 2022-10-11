import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className='font-semibold text-center text-sky-600 text-3xl'>
                <h2>Question-Answer</h2>
            </div>

            <div className='mx-[20%] my-4 border-2 border-sky-500 p-5 rounded-lg'>
                <p className='font-semibold text-lg mb-2'>What is the purpose of React Router?</p>
                <p className='text-justify'><strong>React Router</strong> allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br /> <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than we're used to.</p>
                <br />
                <p className='font-semibold text-lg mb-2'>How does context api work?</p>
                <p className='text-justify'>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. <strong>Context api</strong> provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. <br /> React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.</p>
                <br />
                <p className='font-semibold text-lg mb-2'>How does context api work?</p>
                <p className='text-justify'><strong>The useRef</strong> is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;