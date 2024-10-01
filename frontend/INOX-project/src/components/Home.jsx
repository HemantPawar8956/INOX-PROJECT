import React from "react";
import Corousel1 from "./Corousel1";
import Corousel2 from "./Corousel2";
import LoginPage from "./../pages/LoginPage";
import QuickBookNav from "./QuickBookNav";

const Home = () => {
  return (
    <div>
      <Corousel1 />
      <QuickBookNav />
      <Corousel2 />
      <LoginPage />
    </div>
  );
};

export default Home;
