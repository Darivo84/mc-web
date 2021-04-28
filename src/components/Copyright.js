import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 50px;
  // padding: 4rem 0rem;
  background: #000d1a;
`;


const Copyright = () => {
  return (
    <Section>
      <hr style={{ color: '#733bc3' }} />
      <br />
      <p style={{
          fontSize: '13px',
          color: '#fff',
          paddingBottom: '10px',
          // textTransform: 'uppercase',
          textAlign: 'center',
        }}>Copyright © 2021 | Liberale</p>
    </Section>
  );
};

export default Copyright;
