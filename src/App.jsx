import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard/Dashboard'
import { AddAPhotoOutlined } from "@mui/icons-material";
import UserSellsBook from "./pages/Dashboard/UserDashboard/UserSellsBook";
import AdminBookApprove from "./pages/Dashboard/AdminDashboard/AdminBookApprove";

const routers = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"card",
        element:<Cart/>
      },{
        path:"registration",
        element:<Registration/>
      },{
        path:"login",
        element:<Login/>
      },{
        path:"book",
         element:<Book/>
      },{
        path:'about',
        element:<About/>
      },{
        path:'contact',
        element:<Contact/>
      },{
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:'addBooks',
            element:<AddAPhotoOutlined/>
          },{
            path: 'userSellsBook',
            element: <UserSellsBook/>,
          },{
            path: 'adminBookApproved',
            element: <AdminBookApprove/>,
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
