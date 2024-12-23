import { useState } from "react";
import { AccordionContainer } from "../ui/AccordionNavBarTabAccordion";
import {
  AccordionContent,
  AccordionContentLineDiv,
  AccordionHeader,
  AccordionItem,
  CircleContainer,
} from "../ui/Accordion";
import { ACCORDION_STRUCTURE } from "../lib/constants";
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily";
import { AccordionData, AccordionIds } from "../types/accordion.types";
import { useRecoilValue } from "recoil";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

const AccordionRenderer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const mainTab = useRecoilValue(
    createActiveAccordionNavBarAtom(AccordionIds.MAIN_TAB)
  );
  const subTab = useRecoilValue(
    createActiveAccordionNavBarAtom(AccordionIds.SUB_TAB)
  );
  //@ts-expect-error will find a solution later
  const accordionData: AccordionData[] = ACCORDION_STRUCTURE[mainTab]?.subTabs[subTab]?.accordionItems;
  return (
    <AccordionContainer>
      {accordionData?.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleToggle(index)}>
            {item.accordionTitle}
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            <span>{item.accordionBodyHeading}</span>
            <div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
              {item.accordionBodyContent.map((content, idx) => (
                <AccordionContentLineDiv key={idx}>
                  <CircleContainer>
                  <Circle fill="black" size={5} />
                  </CircleContainer>
                  {content}
                </AccordionContentLineDiv>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default AccordionRenderer;
