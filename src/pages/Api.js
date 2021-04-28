import React, {useState} from 'react'
import GlobalStyle from '../globalStyles';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';

import ContactSection from '../components/ContactSection';
import Copyright from '../components/Copyright';
import InfoSectionAbout from '../components/InfoSectionAbout';
import InfoSection from '../components/InfoSection';
import { InfoData7, InfoData8 } from '../data/InfoData';

function Api() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <InfoSectionAbout {...InfoData7}  />
      <InfoSection {...InfoData8} />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default Api
