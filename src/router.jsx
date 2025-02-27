import {Navigate, createBrowserRouter} from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Signin from "./pages/Signin";
import SelectAccounttype from '../src/pages/SelectAccounttype';
import AccountOption from '../src/pages/AccountOption';
import Signup from "./pages/Signup";
import Services from "./pages/services/services";




const router = createBrowserRouter([
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
              path:'/',
              element:<Signin to="/"/>
            },  
            {
                path:'/selectAccounttype',
                element:<SelectAccounttype/>
            },
            {
                path:'/accountOption',
                element:<AccountOption/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                
            }
        ]
    },
    // {
    //     path:'dashboard',
    //     element:<GuestLayout/>,
    //     children:[
    //         {
    //             path:'country',
    //             element:<Country/>
    //         },   
    //     ]
    // },
,
// {
//     path:'/',
//     element:<Notfound/>
// }
])

export default router