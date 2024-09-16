import Slider from "../../Components/Slider/Slider";
import "./home.scss";
const Home = () => {
  const items = [
    {
      id: 1,
      src: "/public/slider/1.jpg",
    },
    {
      id: 2,
      src: "/public/slider/DeathtoStock_NYC11-Custom1.jpg",
    },
    {
      id: 3,
      src: "/public/slider/15794918936_855690cb09_b1.jpg",
    },
    {
      id: 4,
      src: "/public/slider/33dca3b1ecb01a7d-2012_WeAre-TheRhoads_oct_KinfolkVol5_10_o.jpg",
    },
    {
      id: 5,
      src: "/public/slider/photography_2.jpg",
    },
    {
      id: 6,
      src: "/public/slider/snow-winter-fallen-trees.jpg",
    },
  ];

  return (
    <>
      <Slider items={items} />
    </>
  );
};

export default Home;
