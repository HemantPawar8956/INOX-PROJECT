import React from "react";
import Corousel1 from "./Corousel1";
import Corousel2 from "./Corousel2";
import QuickBookNav from "../components/QuickBookNav";

const Home = () => {
  return (
    <div>
      <Corousel1 />
      <QuickBookNav />
      <Corousel2 />
    </div>
  );
};

export default Home;
