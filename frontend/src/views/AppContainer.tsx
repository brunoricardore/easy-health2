import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

const Container = styled.div`

    display: flex;

`;


const AppContainer: React.FC = () => (
    <div>
        <TopNav />

        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    </div>
);

export default AppContainer;