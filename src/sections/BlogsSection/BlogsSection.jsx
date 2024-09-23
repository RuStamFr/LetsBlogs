import "./blogs-section.scss";
import Section from "../../Components/Section/Section";
import Image from "../../Components/Image/Image";
import BlogImg from "../../assets/images/33dca3b1ecb01a7d-2012_WeAre-TheRhoads_oct_KinfolkVol5_10_o-960x640.jpg";
import { Link } from "react-router-dom";
import PostBlock from "../../Components/PostBlock/PostBlock";
import SignatureImg from "./img/signature.png";
import Wrapper from "../../Components/Wrapper/Wrapper";
import SocMedia from "../../Components/SocMedia/SocMedia";
const BlogsSection = () => {
  const categories = [
    { id: 1, name: "Art" },
    { id: 2, name: "Food" },
    { id: 3, name: "Lifestyle" },
    { id: 4, name: "Movie" },
    { id: 5, name: "Music" },
    { id: 6, name: "Top" },
    { id: 7, name: "Travel" },
  ];
  return (
    <Section className={"blog-section"}>
      <div className="blog-left-block">
        <Link className="blog-title">Beauty of Nature</Link>
        <div className="blog-date-border">
          <p className="blog-date">July 22, 2015</p>
        </div>
        <Image className="blog-img" src={BlogImg} />
        <div className="blog-desc">
          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit
          amet, consectetur Nulla fringilla purus at leo dignissim congue.
          Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
          aliquam. …
        </div>
        <Link className="more-btn">Read More</Link>
        <div className="categories-title-border">
          <p className="categories-title">
            <Link to={"category/1"}>Art &nbsp;/ </Link>
            <Link to={"category/2"}> LifeStyle</Link>
          </p>
        </div>
        <div className="posts-wrapper">
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
        </div>
        <Link className="prev-btn">Older Posts</Link>
      </div>

      <div className={"blog-right-block"}>
        <div className="widget-block about-block">
          <p className="about-block-title">About Me</p>
          <Image
            src={"../../../public/postImg/1.jpg"}
            className={"about-block-img"}
          />
          <p className="about-block-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            exercitationem.
          </p>
          <Wrapper width={"100%"} justify={"center"}>
            <Image className={"about-block-signature"} src={SignatureImg} />
          </Wrapper>
        </div>
        <form className="widget-block subscribe-widget">
          <label className={"subscribe-text"} htmlFor="subscribe">
            Subscribe to My Newsletter
          </label>
          <input
            id="subscribe"
            className="subscribe-input"
            type="email"
            placeholder="Your email address"
          />
          <input className="subscribe-btn" type="submit" value={"Subscribe"} />
        </form>
        <div className="widget-block social-block">
          <p className="social-block-title">Follow Me On</p>
          <SocMedia />
        </div>
        <div className="widget-block categories-block">
          <p className="categories-block-title">Categories</p>
          <ul className="categories-block-list">
            {categories.map((item) => {
              return (
                <li key={item.id} className="category">
                  <Link to={`category/${item.id}`} className="category-link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default BlogsSection;
