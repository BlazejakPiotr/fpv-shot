import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container, MenuContainer } from "./styles";

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
