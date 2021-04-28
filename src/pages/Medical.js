import React, { useState } from 'react';
import GlobalStyle from '../globalStyles';
import Navbar from '../components/Navbar';
import DropDown from '../components/DropDown';
import ContactSection from '../components/ContactSection';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { InfoData3, InfoData4 } from '../data/InfoData';
import Copyright from '../components/Copyright';

const Section1 = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #adb2ba;
`;
const Section2 = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #fff;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  line-height: 1.4;
  padding: 1rem 2rem;
  text-align: justify;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

function Medical({ reverse }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />

      <Section1>
        <Container>
          <ColumnLeft>
            <h1>{InfoData4.heading}</h1>
            <p>{InfoData4.paragraphOne}</p>
            <p>{InfoData4.paragraphTwo}</p>
            <Button to="/services" primary="true">
              {InfoData4.buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={InfoData4.image} alt="services" />
          </ColumnRight>
        </Container>
      </Section1>

      <Section2>
        <Container>
          <ColumnLeft style={{color: '#000'}}>
            <h1>{InfoData3.heading}</h1>
            <p>{InfoData3.paragraphOne}</p>
            <p>{InfoData3.paragraphTwo}</p>
            <Button to="/services" primary="true">
              {InfoData3.buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={InfoData3.image} alt="services" />
          </ColumnRight>
        </Container>
      </Section2>

      <ContactSection />
      <Copyright />
    </div>
  );
}

export default Medical;
