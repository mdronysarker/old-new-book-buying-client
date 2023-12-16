import { Link, Outlet } from "react-router-dom";
import useUserInfo from "../../CustomHook/useUserInfo";
const Dashboard = () => {
  const { role } = useUserInfo();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="w-40 text-xs btn btn-primary drawer-button lg:hidden"
        >
          Open Dashboard
        </label>
        <Outlet></Outlet>
        {/* <div className='md:-mx-24 md:-my-6 -px-12 md:-py-14'>
            
        </div> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="h-full p-4 menu w-80 text-base-content">
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
                 <li>
              <Link to="/dashboard/deliveryProduct"> Delivery Lists </Link>
            </li>
              </>
            )}
           

            {role === "donor" && (
              <li>
                <Link to="/dashboard/userSellsBook"> User Book Request </Link>
                <Link to="/dashboard/donarPrevousDonation"> Prevous Donation </Link>
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
