import Section from "../Section/Section";
import "./footer.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Section className={"footer-top"}>
        <Logo color={"white"} />
        <form className="subscribe-block">
          <label className={"subscribe-text"} htmlFor="subscribe">
            Subscription
          </label>
          <input
            id="subscribe"
            className="subscribe-input"
            type="email"
            placeholder="Your email address"
          />
          <input className="subscribe-btn" type="submit" value={"Subscribe"} />
        </form>
        <div className="footer-recent-posts footer-posts-info">
          <p>Recent Posts</p>
          <ul className="footer-posts-info-ul">
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>Beauty of Nature</Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>
                Fashion Model Shoot
              </Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>Golden Snow Land</Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
          </ul>
        </div>
        <div className="footer-popular-posts footer-posts-info">
          <p>Popular Posts</p>
          <ul className="footer-posts-info-ul">
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>
                Top 10 Ingredients
              </Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>
                Family Comes First
              </Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
            <li className="footer-posts-info-li">
              <Link className={"footer-posts-info-link"}>Golden Snow Land</Link>
              <div className="footer-posts-info-date">July 22, 2015</div>
            </li>
          </ul>
        </div>
      </Section>
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom-content">
          <div className="copyright">
            © Copyright LetsBlog Theme Demo - Theme by ThemeGoods
          </div>
          <ul className="footer-bottom-ul">
            <li className="footer-bottom-li">
              <Link className="footer-bottom-li-link">Home</Link>
            </li>
            <li className="footer-bottom-li">
              <Link className="footer-bottom-li-link">Lifestyle</Link>
            </li>
            <li className="footer-bottom-li">
              <Link className="footer-bottom-li-link">About</Link>
            </li>
            <li className="footer-bottom-li">
              <Link className="footer-bottom-li-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
