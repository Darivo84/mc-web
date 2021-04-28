import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import GlobalStyle from '../globalStyles';
import DropDown from '../components/DropDown';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import { InfoData } from '../data/InfoData';
import ContactSection from '../components/ContactSection';
import Copyright from '../components/Copyright';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default Home
