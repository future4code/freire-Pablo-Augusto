import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Feed from '../pages/Feed';
import Post from '../pages/Post';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/feed' element={<Feed/>} />
            <Route path='/post' element={<Post/>} />
        </Routes>
    </BrowserRouter>
}