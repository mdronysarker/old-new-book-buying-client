import { Link, Outlet } from "react-router-dom";
import useUserInfo from "../../CustomHook/useUserInfo";
const Dashboard = () => {
  const { role } = useUserInfo();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary w-40 text-xs drawer-button lg:hidden"
        >
          Open Dashboard
        </label>
        <Outlet></Outlet>
        {/* <div className='md:-mx-24 md:-my-6  -px-12 md:-py-14'>
            
        </div> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full text-base-content">
          <ul className="bg-base-200 rounded-md h-[80%] p-5 pl-10">
            <li>
              <Link to="/dashboard/profilePage"> Profile Page </Link>
            </li>
            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/adminSellsBook">
                    {" "}
                    Admin Book Request{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/adminBookApproved">
                    Admin Book Approved
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/adminReport"> Admin Report </Link>
                </li>
                <li>
                  <Link to="/dashboard/addCategory"> Admin Add Category </Link>
                </li>
                <li>
                  <Link to="/dashboard/oldBook">Old Books</Link>
                </li>
                <li>
                  <Link to="/dashboard/newBook">New Books</Link>
                </li>
              </>
            )}

            {role === "donor" && (
              <li>
                <Link to="/dashboard/userSellsBook"> User Book Request </Link>
              </li>
            )}

            {role === "supplier" && (
              <li>
                <Link to="/dashboard/supplierBookApproved">
                  Supplier Book Approved{" "}
                </Link>
              </li>
            )}

            {role === "user" && (
              <li>
                <Link to="/dashboard/prevousOrder"> Prevous Order</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
