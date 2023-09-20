import { createBrowserRouter } from "react-router-dom";
import HomePage from "../mainLayout/compo/HomePage";
import Home from "../mainLayout/compo/Home";
import Product from "../mainLayout/compo/Product";
import ProductDetail from "../mainLayout/compo/ProductDetail";
import DashBoardLayout from "../dashboard layout/DashBoardLayout";
import Profile from "../dashboard layout/profile";
import Setting from "../dashboard layout/Setting";
import Tool from "../dashboard layout/Tool";


const router=createBrowserRouter([
    {
      path:'/',
      element:<HomePage></HomePage>,
      children:[
        {
            path:'/',
            element:<div> default </div>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/product',
            element:<Product></Product>,
            loader:()=>fetch('https://dummyjson.com/products')
        },
        {
            path:'/product/:id',
            element:<ProductDetail></ProductDetail>,
            loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            
        },
        {
            path:'/dashboard',
            element:<DashBoardLayout></DashBoardLayout>,
            children:[
                {
                    path:'/dashboard/profile',
                    element:<Profile></Profile>
                },
                {
                    path:'/dashboard/setting',
                    element:<Setting></Setting>
                },
                {
                    path:'/dashboard/tool',
                    element:<Tool></Tool>
                },
            ]
        },
      
      ]
    }
  ])

export default router;