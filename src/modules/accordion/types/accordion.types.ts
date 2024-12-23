

export interface AccordionContentProps {
    activeSubTab: string;
    accordionContents: Record<string, string>;
  }
  
export interface AccordionNavBarProps<T extends string[]> {
    tabs: T;
    id:keyof typeof AccordionIds,
  }

export interface AccordionProps {
    title: string;
    content: string;
  }
export enum AccordionIds {
    MAIN_TAB="MAIN_TAB",
    SUB_TAB="SUB_TAB",
}
export type AccordionData = {
  accordionTitle: string;
  accordionBodyHeading: string;
  accordionBodyContent: string[];
};
