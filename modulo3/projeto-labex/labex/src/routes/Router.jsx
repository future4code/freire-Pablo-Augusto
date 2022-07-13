import AdminHomePage from "../pages/AdminHomePage";
import AdminTripDetails from "../pages/AdminTripDetails";
import Home from "../pages/Home";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const Router = () => {
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home/> } />
                <Route path='admin-home' element={ <AdminHomePage/> } />
                <Route path='admin-tripdetails' element={ <AdminTripDetails/> }/>
                <Route path='*' element={<Error/> } />
            </Routes>
        </BrowserRouter>
        </div>
    )
}