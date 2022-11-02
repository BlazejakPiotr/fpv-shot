import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Container>
      <GiHamburgerMenu size={32} />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
