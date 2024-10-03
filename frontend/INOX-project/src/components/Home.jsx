import React from "react";
import Corousel1 from "./Corousel1";
import Corousel2 from "./Corousel2";
import QuickBookNav from "../components/QuickBookNav";
import LoginPage from "../pages/LoginPage";
// import Corousel1 from './Corousel1';
// import Corousel2 from './Corousel2';

const Home = () => {
  return (
    <div>
      <Corousel1 />
      <QuickBookNav />
      <Corousel2 />

      <QuickBookNav />
    </div>
  );
};

export default Home;
