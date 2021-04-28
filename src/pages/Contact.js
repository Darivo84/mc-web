import React, {useState} from 'react'
import GlobalStyle from '../globalStyles';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';

import ContactSection from '../components/ContactSection';
import Copyright from '../components/Copyright';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <h1>Contact</h1>
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default Contact
