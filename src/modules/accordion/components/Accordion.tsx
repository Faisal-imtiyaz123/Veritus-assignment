

import { useState } from "react";
import { AccordionContainer } from "../ui/AccordionNavBarTabAccordion";
import { AccordionArrow, AccordionContent, AccordionHeader, AccordionItem } from "../ui/Accordion";
import { ACCORDION_NAVBAR_TABS, ACCORDION_STRUCTURE, ACCORDION_SUB_NAVBAR_TABS_ARRAY } from "../lib/constants";
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily";
import { AccordionData, AccordionIds } from "../types/accordion.types";
import { useRecoilValue } from "recoil";


const AccordionRenderer = () => {
  const [openIndex, setOpenIndex] = useState<number|null>(null);

  const handleToggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const mainTab = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.MAIN_TAB,ACCORDION_NAVBAR_TABS))
  const subTab = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.SUB_TAB,ACCORDION_SUB_NAVBAR_TABS_ARRAY))
  //@ts-expect-error will figure out a solution later
  const accordionData:AccordionData[] = ACCORDION_STRUCTURE[mainTab]?.subTabs[subTab]?.accordionItems;
  return (
    <AccordionContainer>
      {accordionData?.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleToggle(index)}>
            {item.accordionTitle}
            <AccordionArrow isOpen={openIndex === index}>⮟</AccordionArrow>
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            <h4>{item.accordionBodyHeading}</h4>
            <ul>
              {item.accordionBodyContent.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default AccordionRenderer;
