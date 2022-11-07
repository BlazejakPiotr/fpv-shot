import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuVisibility = (prev) => setIsVisible(!prev);

  return (
    <MenuContainer>
      {isVisible ? (
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Kontakt</li>
          </ul>
        </div>
      ) : (
        <GiHamburgerMenu
          size={32}
          onClick={() => handleMenuVisibility(isVisible)}
        />
      )}
    </MenuContainer>
  );
};

export default HamburgerMenu;

const MenuContainer = styled.div`
  padding: 0.5rem 1rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  background-color: #f0f;
`;
