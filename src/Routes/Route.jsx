import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/Login";

const Route = ()=>{

    const router = createBrowserRouter (

        [
            {path: "/",
                children:[
                    {
                        index:true,
                        element: <Index/>,
                    },{
                        path:"login",
                        element: <Login/>
                    }

                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Route;