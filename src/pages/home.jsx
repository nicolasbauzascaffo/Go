import { useEffect, useState } from "react";
import Header from "../components/header";
import Mainbox from "../components/mainbox";
import Footer from "../components/footer";
import '../styles/home.css'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home'>
      <Header className='header' />
      <Mainbox className='mainbox' />
      <Footer className='footer' />
    </div>
  );
}

export default Home;