import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
