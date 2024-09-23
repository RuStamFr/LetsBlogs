import "./header.scss";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import Section from "../Section/Section";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import HamburgerIcon from "./hamburger.png";
import SocMedia from "../SocMedia/SocMedia";
export const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "SinglePost",
    path: "/single-post/1",
  },
  {
    name: "Category",
    path: "/category/1",
  },
];
const Header = () => {
  return (
    <header>
      <Section className="header-top">
        <SocMedia />
        <Logo />
        <div className="header-top-right-menu">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
          </svg>
          <Wrapper className="burger-menu-wrapper" width={"1.5rem"}>
            <Image src={HamburgerIcon} />
          </Wrapper>
        </div>
      </Section>
      <nav className="header-nav">
        {navigation.map((item) => {
          return (
            <Link className="header-nav-link" to={item.path} key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
export default Header;
