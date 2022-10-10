import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./layouts/Main";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog"
import QuizTest from "./components/QuizTest/QuizTest";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: < QuizTest ></QuizTest >
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])