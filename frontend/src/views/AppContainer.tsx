import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";


const AppContainer: React.FC = () => (
    <div className="app-container">

        <TopNav/>
        <Sidebar />

        <Outlet />
    </div>
);

export default AppContainer;