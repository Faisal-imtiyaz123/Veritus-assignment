import styled, { css } from "styled-components";

interface AccordionProps {
  isOpen: boolean;
}

export const AccordionContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  background: #f7f7f7;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #eaeaea;
  }
`;

export const AccordionArrow = styled.span<AccordionProps>`
  font-size: 16px;
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const AccordionContent = styled.div<AccordionProps>`
  padding: 16px;
  font-size: 16px;
  background: #fff;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) => (isOpen ? "fadeIn 0.3s ease-in-out" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
