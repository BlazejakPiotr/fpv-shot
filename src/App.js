import styled from "styled-components";
import HamburgerMenu from "./components/hamburger-menu";

function App() {
  return (
    <Container>
      <HamburgerMenu /> Hello world
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
`;
