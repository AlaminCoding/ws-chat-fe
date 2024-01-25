import styled from "styled-components";
import { colors } from "../styles/Globalstyle";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="/" className="btn">
            <AiFillHome />
            Home
          </a>
        </li>
        <li>
          <a href="/login" className="btn">
            <FaUser />
            Login
          </a>
        </li>
        <li>
          <a href="/login" className="btn">
            <IoChatbubblesSharp />
            Chat
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  ul {
    display: flex;
    li {
      a {
        color: ${colors.black};
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;
