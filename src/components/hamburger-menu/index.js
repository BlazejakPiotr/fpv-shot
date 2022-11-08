import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuVisibility = (prev) => setIsVisible(!prev);

  return (
    <>
      <Container>
        <div>
          <GiHamburgerMenu
            size={32}
            onClick={() => handleMenuVisibility(isVisible)}
          />
        </div>
        {isVisible && (
          <MenuContainer>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Kontakt</li>
            </ul>
          </MenuContainer>
        )}
      </Container>
    </>
  );
};

export default HamburgerMenu;

const Container = styled.div`
  padding: 0.75rem 1.25rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  div:first-child {
    display: flex;
    justify-content: flex-end;
  }
`;

const MenuContainer = styled.div`
  ul li {
    padding: 0.75rem 0;
  }
`;
