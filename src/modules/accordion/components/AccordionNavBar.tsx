import { useRef } from "react";
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { AccordionNavBarContainer, AccordionNavBarTab, AccordionNavBarTabsContainer, ArrowContainer } from "../ui/AccordionNavBar";
import useHorizantalScroll from "../hooks/useHorizantalScroll";
import { useRecoilState } from "recoil";
import { AccordionNavBarProps } from "../types/accordion.types";
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily";
import { useResetSubTab } from "../hooks/useResetSubTab";



const AccordionNavBar = <T extends string[],>({
  tabs,
  id,
}: AccordionNavBarProps<T>) =>{
  const accordionNavBarRef = useRef<HTMLDivElement>(null);
  const { isAtLeftEnd, isAtRightEnd, scrollLeft, scrollRight } = useHorizantalScroll(accordionNavBarRef);
  const [activeTab, setActiveTab] = useRecoilState(createActiveAccordionNavBarAtom(id))
  useResetSubTab()
    return (
      <AccordionNavBarContainer>
      <ArrowContainer>
      {(isAtRightEnd || !isAtLeftEnd)&& <ChevronLeft size={20}  onClick={scrollLeft}/>}
      </ArrowContainer>
        <AccordionNavBarTabsContainer ref={accordionNavBarRef}>
            {tabs?.map((tab,index) => (
            <AccordionNavBarTab key={index} isActive={activeTab === tab } onClick={() => setActiveTab(tab)}>
                {tab}
            </AccordionNavBarTab>
            ))}
        </AccordionNavBarTabsContainer>
        <ArrowContainer>
        { (isAtLeftEnd || !isAtRightEnd) &&  <ChevronRight size={20} onClick={scrollRight}/>}
        </ArrowContainer>
      </AccordionNavBarContainer>
    );
} 
  

export default AccordionNavBar;

