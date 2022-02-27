import styled from "styled-components";

const Menu = styled.div`
  width: 200px;
  background-color: #CCC;
  height: calc(100vh - 70px);
`;


const Sidebar = () => {
  return (
    <Menu>
      <h4>Menu</h4>
    </Menu>
  )
}

export default Sidebar;