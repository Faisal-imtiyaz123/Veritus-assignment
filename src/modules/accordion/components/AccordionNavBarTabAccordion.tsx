
import { AccordionContentProps } from "../types/accordion.types";
import { AccordionContainer } from "../ui/AccordionNavBarTabAccordion";
import Accordion from "./Accordion";



const AccordionNavBarTabAccordion = ({ activeSubTab, accordionContents }:AccordionContentProps) => (
  <AccordionContainer>
    {activeSubTab && (
      <>
        <h2>{activeSubTab}</h2>
        <Accordion
          title={activeSubTab}
          content={accordionContents[activeSubTab] || "No content available"}
        />
      </>
    )}
  </AccordionContainer>
);

export default AccordionNavBarTabAccordion;