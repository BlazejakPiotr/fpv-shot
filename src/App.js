import styled from "styled-components";
import HamburgerMenu from "./components/hamburger-menu";
import HomePage from "./pages/home";

function App() {
  return (
    <Container>
      <HamburgerMenu />
      <HomePage />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;
