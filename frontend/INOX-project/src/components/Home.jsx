import React from "react";
import QuickBookNav from "../components/QuickBookNav";
import LoginPage from "../pages/LoginPage";
import Corousel1 from './Corousel1';
import Corousel2 from './Corousel2';

const Home = () => {
  return (
    <div>
      <Corousel1 />
      <Corousel2 />
    <LoginPage/>
      <QuickBookNav />
    </div>
  );
};

export default Home;
