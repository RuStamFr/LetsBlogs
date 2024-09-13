import { Outlet } from "react-router-dom";
import "./root.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className={"page-main"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
