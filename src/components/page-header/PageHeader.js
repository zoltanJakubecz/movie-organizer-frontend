import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  background-color: #ececec;
  padding: 0.5rem 2rem;
  margin-bottom: 1.5rem;
  & h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
`;

export default function PageHeader() {
  return (
    <Container>
      <h1>Movie Organizer v0.0.1</h1>
    </Container>
  )
}
