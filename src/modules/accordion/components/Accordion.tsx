

import { useState } from "react";
import { AccordionContainer } from "../ui/AccordionNavBarTabAccordion";
import { AccordionContent, AccordionHeader, AccordionItem } from "../ui/Accordion";
import { ACCORDION_STRUCTURE} from "../lib/constants";
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily";
import { AccordionData, AccordionIds } from "../types/accordion.types";
import { useRecoilValue } from "recoil";
import { ChevronDown, ChevronRight } from "lucide-react";


const AccordionRenderer = () => {
  const [openIndex, setOpenIndex] = useState<number|null>(null);

  const handleToggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const mainTab = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.MAIN_TAB))
  const subTab = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.SUB_TAB))
  //@ts-expect-error will figure out a solution later
  const accordionData:AccordionData[] = ACCORDION_STRUCTURE[mainTab]?.subTabs[subTab]?.accordionItems;
  return (
    <AccordionContainer>
      {accordionData?.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleToggle(index)}>
            {item.accordionTitle}
            {openIndex === index ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
            {/* <AccordionArrow isOpen={openIndex === index}>⮟</AccordionArrow> */}
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
