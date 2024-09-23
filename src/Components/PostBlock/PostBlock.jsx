import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./post-block.scss";

const PostBlock = () => {
  return (
    <div className="post-block">
      <Link className="post-img-link" to={"single-post/1"}>
        <Image className={"post-image"} src={"../../../public/postImg/1.jpg"} />
      </Link>
      <Link className="post-title-link" to={"single-post/1"}>
        Fashion Model Shoot
      </Link>
      <div className="post-date-border">
        <p className="post-date">July 22, 2015</p>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
        assumenda laudantium. Ea repellendus, ipsam distinctio porro suscipit
        mollitia fuga quaerat!
      </p>
      <Link className="post-btn">Read More</Link>
    </div>
  );
};

export default PostBlock;
