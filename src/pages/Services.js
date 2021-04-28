import React, {useState} from 'react'
import GlobalStyle from '../globalStyles';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';

import ContactSection from '../components/ContactSection';
import InfoSectionServices from '../components/InfoSectionServices';
import { InfoData5, InfoData6 } from '../data/InfoData';
import InfoSection from '../components/InfoSection';
import Copyright from '../components/Copyright';

function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <InfoSectionServices {...InfoData5} />
      <InfoSection {...InfoData6} />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default Services
