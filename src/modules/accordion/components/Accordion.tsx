
import { useState } from "react";
import { AccordionContainer } from "../ui/AccordionNavBarTabAccordion";
import { AccordionContent, AccordionHeader } from "../ui/Accordion";
import { AccordionProps } from "../types/accordion.types";



const Accordion = ({ title, content }:AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionHeader>
      {isOpen && <AccordionContent>{content}</AccordionContent>}
    </AccordionContainer>
  );
};
export default Accordion;