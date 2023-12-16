import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AddAPhotoOutlined } from "@mui/icons-material";
import UserSellsBook from "./pages/Dashboard/UserDashboard/UserSellsBook";
import AdminBookApprove from "./pages/Dashboard/AdminDashboard/AdminBookApprove";
import AdminSellsBook from "./pages/Dashboard/AdminDashboard/AdminSellsBook";
import SupplierBookApprove from "./pages/Dashboard/SupplierDashboard/SupplierBookApproved";
import { BookProvider } from "./context/BookContext";
import Book from "./pages/Book/Book";
import EditCategory from "./pages/Dashboard/AdminDashboard/AddCategory/EditCategory";
import ProductDetails from "./pages/productDetail/ProductDetails";
import NewBook from "./pages/Dashboard/AdminDashboard/NewBook";
import OldBook from "./pages/Dashboard/AdminDashboard/OldBook";
import PrevousOrder from "./pages/Dashboard/UserDashboard/PrevousOrder";
import ProfilePage from "./pages/Dashboard/UserDashboard/ProfilePage";
import AdminReport from "./pages/Dashboard/AdminDashboard/AdminReport";
import SupplierBookList from "./pages/Dashboard/SupplierDashboard/SupplierBookList";
import PrivateRoute from "./context/PrivateContext";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "card",
        element: <Cart />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "book",
        element: (
          <BookProvider>
            <Book />
          </BookProvider>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: `book/singleProduct/:productId`,
        element: <BookProvider><ProductDetails />,</BookProvider>
      },
      {
        path: "dashboard",
        element:<PrivateRoute><Dashboard /> </PrivateRoute> ,
        children: [
          {
            path: "addBooks",
            element: <AddAPhotoOutlined />,
          },
          {
            path: "userSellsBook",
            element: <UserSellsBook />,
          },
          {
            path: "adminBookApproved",
            element: <AdminBookApprove />,
          },
          {
            path:'addBooks',
            element:<AddAPhotoOutlined/>
          },{
            path: 'userSellsBook',
            element: <UserSellsBook/>,
          },{
            path: 'adminBookApproved',
            element: <AdminBookApprove/>,
          },{
            path: 'adminSellsBook',
            element: <AdminSellsBook/>
          },{
            path: 'supplierBookApproved',
            element: <SupplierBookApprove />
          },{
            path: 'addCategory',
            element: <EditCategory/>
          },{
            path: 'newBook',
            element: <NewBook/>
          },{
            path: 'oldBook',
            element: <OldBook/>
          },{
            path: 'prevousOrder',
            element: <PrevousOrder/>
          },{
            path: 'profilePage',
            element:<ProfilePage/>
          },{
            path: 'adminReport',
            element:<AdminReport/>
          },{
            path: 'supplierBookList',
            element: <SupplierBookList/>
          }
        ]
      },{
        path: 'cart',
        element:<Cart/>
      },
    ]
  }
])

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
