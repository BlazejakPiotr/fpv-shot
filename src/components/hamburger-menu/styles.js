import styled from "styled-components";

export const Container = styled.div`
  padding: 0.75rem 1.25rem;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  div:first-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background-color: #fff;
  ul li {
    padding: 0.75rem 0;
  }
`;
