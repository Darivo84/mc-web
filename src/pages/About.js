import React, {useState} from 'react'
import GlobalStyle from '../globalStyles';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';
import InfoSectionAbout from '../components/InfoSectionAbout';
import { InfoData2, InfoData } from '../data/InfoData';
import InfoSection from '../components/InfoSection';
import ContactSection from '../components/ContactSection';
import Copyright from '../components/Copyright';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <InfoSectionAbout {...InfoData2} />
      <InfoSection {...InfoData} />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default About;
