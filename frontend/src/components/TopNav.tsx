import styled from "styled-components";

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
`;

const TopNav = () => {
  return (
    <Nav>
        Easy Health 2.0
    </Nav>
  )
}

export default TopNav;