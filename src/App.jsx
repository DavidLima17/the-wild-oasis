import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello World</Heading>

        <Heading as="h2">Check in and out</Heading>

        <Button onClick={() => alert('check in')}>Click Me</Button>
        <Button onClick={() => alert('check out')}>Click Me</Button>

        <Heading as="h3">forms</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

