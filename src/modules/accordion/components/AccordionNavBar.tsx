import { useRef } from "react";
import { ArrowLeft , ArrowRight} from 'lucide-react';
import { AccordionNavBarContainer, AccordionNavBarTab, AccordionNavBarTabsContainer } from "../ui/AccordionNavBar";
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
      <AccordionNavBarContainer >
        {(isAtRightEnd || !isAtLeftEnd)&& <ArrowLeft  onClick={scrollLeft}/>}
        <AccordionNavBarTabsContainer ref={accordionNavBarRef}>
            {tabs?.map((tab,index) => (
            <AccordionNavBarTab key={index} isActive={activeTab === tab } onClick={() => setActiveTab(tab)}>
                {tab}
            </AccordionNavBarTab>
            ))}
        </AccordionNavBarTabsContainer>
        { (isAtLeftEnd || !isAtRightEnd) &&  <ArrowRight onClick={scrollRight}/>}
      </AccordionNavBarContainer>
    );
} 
  

export default AccordionNavBar;

