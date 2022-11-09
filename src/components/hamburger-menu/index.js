import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Container, MenuContainer } from "./styles";
import { containerAnimation, hamburgerExtendingAnimation } from "./animations";

const HamburgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuVisibility = (prev) => setIsVisible(!prev);

  return (
    <>
      <Container
        as={motion.div}
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <div>
          <GiHamburgerMenu
            size={32}
            onClick={() => handleMenuVisibility(isVisible)}
          />
        </div>
        {isVisible && (
          <MenuContainer
            as={motion.div}
            variants={hamburgerExtendingAnimation}
            initial="hidden"
            animate="visible"
          >
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
