import { useContext } from "react";
import styled from "styled-components";
import { UserContext, UserContextType } from "../store/user_context/UserContext";

const Nav = styled.nav`
    height: 70px;
    background-color: #000;
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: 600;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
`;

const NavUserAvatar = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;

    border-left: 1px solid #CCC;
    height: 100%;
    padding-left: 15px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #fff;
    }

    span.user-display-name {

        font-size: 14px;
        font-weight: 200;

    }

`;

const TopNav = () => {

    const userContext = useContext(UserContext);

    return (
        <Nav>

            {
                userContext?.user &&
                <NavUserAvatar>
                    <img src={userContext.user.avatar} alt="Seu Avatar" />
                    <span className="user-display-name">Olá, {userContext.user.name}</span>
                </NavUserAvatar>
            }

        </Nav>
    )
}

export default TopNav;