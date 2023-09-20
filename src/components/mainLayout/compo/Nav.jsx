import { NavLink } from "react-router-dom";
import 'nav.css'
const Nav = () => {
    return (
        <div className="flex justify-between shadow-lg p-5 ">
               <h1 className="font-bold text-xl ">Amajhon</h1>
              <div className=" flex gap-4">
                  <NavLink className={({isActive,isPending})=>isPending?'pending':isActive?'bg-green-500':''} to='/home'>Home</NavLink>
                  <NavLink to='/product'>Products</NavLink>
                  <NavLink to='/dashboard'>DashBoard</NavLink>

              </div>
        </div>
    );
};

export default Nav;