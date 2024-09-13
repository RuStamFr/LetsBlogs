import "./logo.scss";
import LogoBlack from "../../assets/images/blog-logo-black.png";
import LogoWhite from "../../assets/images/blog-log-white.png";
import { Link } from "react-router-dom";
import Image from "../Image/Image";

const Logo = ({ color = "black" }) => {
  const currentImage = color === "white" ? LogoWhite : LogoBlack;
  return (
    <Link to={"/"}>
      <Image
        className={`logo ${color}-logo`}
        src={currentImage}
        alt={"LetsBlogs logo black"}
      />
    </Link>
  );
};
export default Logo;
