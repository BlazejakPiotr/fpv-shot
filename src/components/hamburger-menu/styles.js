import styled from "styled-components";

export const Container = styled.div`
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

export const MenuContainer = styled.div`
  ul li {
    padding: 0.75rem 0;
  }
`;
