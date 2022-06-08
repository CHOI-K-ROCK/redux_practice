import React from 'react';
import styled from 'styled-components';

import Array from './components/Array';
import Counter from './components/Counter';
import Text from './components/Text';

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

function App() {
  return (
    <Container>
      <Counter />
      <Text />
      <Array />
    </Container>
  );
}

export default App;
