import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/registration' element={<RegistrationPage/>} />
            <Route index path='/' element={<FeedPage/>} />
            <Route path='/post/:id' element={<PostPage/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
}