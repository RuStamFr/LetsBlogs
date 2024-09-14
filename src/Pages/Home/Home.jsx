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
      src: "/public/slider/1.jpg",
    },
    {
      id: 3,
      src: "/public/slider/DeathtoStock_NYC11-Custom1.jpg",
    },
    {
      id: 4,
      src: "/public/slider/DeathtoStock_NYC11-Custom1.jpg",
    },
    {
      id: 5,
      src: "/public/slider/1.jpg",
    },
  ];
  return (
    <>
      <Slider items={items} />
    </>
  );
};
export default Home;
