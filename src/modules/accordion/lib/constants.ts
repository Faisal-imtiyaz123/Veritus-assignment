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
export const ACCORDION_STRUCTURE = {
  [AccordionNavbarTabs.QA]: {
    subTabs: {
      [AccordionSubNavbarTabs.SubTab1]: {
        heading: "Sub Tab 1 In Detail",
        accordionItems: [
          {
            accordionTitle: "Accordion 1",
            accordionBodyHeading: "Accordion 1 Heading",
            accordionBodyContent: [
              "Accordion 1 Content 1",
              "Accordion 1 Content 2",
              "Accordion 1 Content 3",
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab2]: {
        heading: "Sub Tab 2 In Detail",
        accordionItems: [
          {
            accordionTitle: "Accordion 2",
            accordionBodyHeading: "Accordion 2 Heading",
            accordionBodyContent: [
              "Accordion 2 Content 1",
              "Accordion 2 Content 2",
            ],
          },
        ],
      },
    },
  },
  [AccordionNavbarTabs.ManuscriptAnalysis]: {
    subTabs: {
      [AccordionSubNavbarTabs.SubTab1]: {
        heading: "Sub Tab 1 Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Accordion 3",
            accordionBodyHeading: "Accordion 3 Heading",
            accordionBodyContent: [
              "Accordion 3 Content 1",
              "Accordion 3 Content 2",
            ],
          },
        ],
      },
    },
  },
  [AccordionNavbarTabs.Concise]: {
    subTabs: {
      [AccordionSubNavbarTabs.SubTab2]: {
        heading: "Sub Tab 2 Concise",
        accordionItems: [
          {
            accordionTitle: "Accordion 4",
            accordionBodyHeading: "Accordion 4 Heading",
            accordionBodyContent: [
              "Accordion 4 Content 1",
              "Accordion 4 Content 2",
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab3]: {
        heading: "Sub Tab 3 Concise",
        accordionItems: [
          {
            accordionTitle: "Accordion 5",
            accordionBodyHeading: "Accordion 5 Heading",
            accordionBodyContent: [
              "Accordion 5 Content 1",
              "Accordion 5 Content 2",
              "Accordion 5 Content 3",
            ],
          },
        ],
      },
    },
  },
};

