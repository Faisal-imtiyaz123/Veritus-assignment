import { AccordionNavbarTabs,AccordionNavBarTabsType,AccordionSubNavbarTabs } from "../types/constants.types";


export const ACCORDION_SUB_NAVBAR_TABS_ARRAY = [
    "Sub Tab 1", "Sub Tab 2","Sub Tab 3"
]

export const ACCORDION_NAVBAR_TABS: AccordionNavBarTabsType = [
  AccordionNavbarTabs.QA,
  AccordionNavbarTabs.ManuscriptAnalysis,
  AccordionNavbarTabs.PeerReviewAnalysis,
  AccordionNavbarTabs.Concise,
  AccordionNavbarTabs.Introduction,
  AccordionNavbarTabs.Methodology,
  AccordionNavbarTabs.Conclusion,
  AccordionNavbarTabs.References,
  AccordionNavbarTabs.Appendix,
  AccordionNavbarTabs.Discussion,
  AccordionNavbarTabs.FurtherWork,
];

export const ACCORDION_SUB_NAVBAR_TABS= {
    [AccordionNavbarTabs.QA]: [AccordionSubNavbarTabs.SubTab1,AccordionSubNavbarTabs.SubTab2],
    [AccordionNavbarTabs.ManuscriptAnalysis]: [AccordionSubNavbarTabs.SubTab1],
    [AccordionNavbarTabs.Concise]: [AccordionSubNavbarTabs.SubTab2,AccordionSubNavbarTabs.SubTab3],
};
export const ACCORDION_SUB_NAVBAR_TAB_ACCORDION =[
  {
    [AccordionSubNavbarTabs.SubTab1]:{
      heading:"Sub Tab 1 in Detail",
      content:["Sub Tab 1 in Detail", "Sub Tab 2 in Detail", "Sub Tab 3 in Detail"]
    }
  },
  {
    [AccordionSubNavbarTabs.SubTab2]:{
      heading:"Sub Tab 2 in Detail",
      content:["Sub Tab 1 in Detail", "Sub Tab 2 in Detail", "Sub Tab 3 in Detail"]
    }
  },
  {
    [AccordionSubNavbarTabs.SubTab3]:{
      heading:"Sub Tab 3 in Detail",
      content:["Sub Tab 1 in Detail", "Sub Tab 2 in Detail", "Sub Tab 3 in Detail"]
    }
  }
]

