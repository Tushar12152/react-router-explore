import { NavLink, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
    return (
        <div  className="flex ">
             <div className="flex flex-col gap-6 shadow-lg w-[7%] ml-10 p-5">
             <NavLink  to="/dashboard/profile">Profile</NavLink>
             <NavLink to="/dashboard/setting">Setting</NavLink>
             <NavLink to="/dashboard/tool">Tool</NavLink>
             </div>
  
                
             <div className="w-[50%] mx-auto">
             <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashBoardLayout;