import React from "react";

import Carasoul from "../components/Carasoul";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Searchopt from "../components/search-opt";
// import HeroImg from "../components/HeroImg";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroImg /> */}
      <Searchopt />
      <Carasoul />
      <Footer />
    </div>
  );
};

export default Home;
