import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <div>
              <Nav></Nav>
              <div className="min-h-screen">
              <Outlet></Outlet>
              </div>
              <Footer></Footer>
        </div>
    );
};

export default HomePage;