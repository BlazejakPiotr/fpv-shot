import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuVisibility = (prev) => setIsVisible(!prev);

  return (
    <MenuContainer>
      <GiHamburgerMenu
        size={32}
        onClick={() => handleMenuVisibility(isVisible)}
      />
      {isVisible && window.innerWidth < 768 && <div>Hello</div>}
    </MenuContainer>
  );
};

export default HamburgerMenu;

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
