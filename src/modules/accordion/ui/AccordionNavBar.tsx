import styled from "styled-components";

export const AccordionNavBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
  background-color: #fff;
`;

export const AccordionNavBarTabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  flex: 1;
  scroll-behavior: smooth;
  scrollbar-width: none;
  msOverflowStyle: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AccordionNavBarTab = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "navy" : "gray")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  border-bottom: ${(props) =>
    props.isActive ? "2px solid navy" : "2px solid transparent"};
  transition: color 0.3s ease, border-bottom 0.3s ease;
`;
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;  /* Added gap between the arrow and the tabs */
`;
