import React from 'react';
import styled from 'styled-components';
import map from '../images/map.png';
import { ContactData1, ContactData2, ContactData3 } from '../data/ContactData';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #000d1a;
`;

const Container = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
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
  line-height: 1.4;
  padding: 1rem 2rem;
  text-align: justify;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
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

const ContactSection = () => {
  return (
    <Section>
      <h1
        style={{
          fontSize: '24px',
          color: 'white',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Get in touch with us
      </h1>
      <Container>
        <ColumnLeft>
          <h2 style={{ color: '#fff' }}>{ContactData1.heading}</h2>
          <p style={{ color: '#fff' }}>
            {ContactData1.paragraphOne + ' ' + ContactData1.paragraphTwo}
          </p>
          <h2 style={{ color: '#fff' }}>{ContactData2.heading}</h2>
          <p style={{ color: '#fff' }}>
            {ContactData2.paragraphOne}
          </p>
          <h2 style={{ color: '#fff' }}>{ContactData3.heading}</h2>
          <p style={{ color: '#fff' }}>
            {ContactData3.paragraphOne}
          </p>
        </ColumnLeft>
        <ColumnRight>
          <img src={map} alt="map" />
        </ColumnRight>
      </Container>
    </Section>
    // <Section>
    //   <Container>
    //     <h1 style={{ fontSize: '24px', color: 'white', textAlign: 'center' }}>
    //       Contact Details
    //     </h1>
    //     <Column>
    //       <h1>{title}</h1>
    //       <p>{caption1}</p>
    //       <p>{caption2}</p>
    //       <h1>{title2}</h1>
    //       <p>{captionPhone}</p>
    //       <h1>{title3}</h1>
    //       <p>{captionEmail}</p>
    //     </Column>
    //   </Container>
    // </Section>
  );
};

export default ContactSection;
