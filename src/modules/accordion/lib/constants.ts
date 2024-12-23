import { AccordionNavbarTabs, AccordionNavBarTabsType, AccordionSubNavbarTabs } from "../types/constants.types";

export const ACCORDION_SUB_NAVBAR_TABS_ARRAY = [
  "Sub Tab 1", "Sub Tab 2", "Sub Tab 3", "Sub Tab 4", "Sub Tab 5", "Sub Tab 6", "Sub Tab 7", "Sub Tab 8"
];

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

export const ACCORDION_SUB_NAVBAR_TABS = {
  [AccordionNavbarTabs.QA]: [
    AccordionSubNavbarTabs.SubTab1,
    AccordionSubNavbarTabs.SubTab2,
    AccordionSubNavbarTabs.SubTab3,
    AccordionSubNavbarTabs.SubTab4
  ],
  [AccordionNavbarTabs.ManuscriptAnalysis]: [
    AccordionSubNavbarTabs.SubTab1,
    AccordionSubNavbarTabs.SubTab2
  ],
  [AccordionNavbarTabs.Concise]: [
    AccordionSubNavbarTabs.SubTab2,
    AccordionSubNavbarTabs.SubTab3,
    AccordionSubNavbarTabs.SubTab4
  ],
  [AccordionNavbarTabs.Introduction]: [
    AccordionSubNavbarTabs.SubTab1,
    AccordionSubNavbarTabs.SubTab2
  ],
  // Add similar entries for other tabs...
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
              "Accordion 1 Content 4",
              "Accordion 1 Content 5"
            ],
          },
          {
            accordionTitle: "Accordion 6",
            accordionBodyHeading: "Accordion 6 Heading",
            accordionBodyContent: [
              "Accordion 6 Content 1",
              "Accordion 6 Content 2",
              "Accordion 6 Content 3"
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
              "Accordion 2 Content 3",
              "Accordion 2 Content 4",
              "Accordion 2 Content 5"
            ],
          },
          {
            accordionTitle: "Accordion 7",
            accordionBodyHeading: "Accordion 7 Heading",
            accordionBodyContent: [
              "Accordion 7 Content 1",
              "Accordion 7 Content 2",
              "Accordion 7 Content 3",
              "Accordion 7 Content 4"
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab3]: {
        heading: "Sub Tab 3 In Detail",
        accordionItems: [
          {
            accordionTitle: "Accordion 3",
            accordionBodyHeading: "Accordion 3 Heading",
            accordionBodyContent: [
              "Accordion 3 Content 1",
              "Accordion 3 Content 2",
              "Accordion 3 Content 3",
              "Accordion 3 Content 4"
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab4]: {
        heading: "Sub Tab 4 In Detail",
        accordionItems: [
          {
            accordionTitle: "Accordion 8",
            accordionBodyHeading: "Accordion 8 Heading",
            accordionBodyContent: [
              "Accordion 8 Content 1",
              "Accordion 8 Content 2",
              "Accordion 8 Content 3",
              "Accordion 8 Content 4",
              "Accordion 8 Content 5"
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
              "Accordion 3 Content 3",
              "Accordion 3 Content 4"
            ],
          },
          {
            accordionTitle: "Accordion 9",
            accordionBodyHeading: "Accordion 9 Heading",
            accordionBodyContent: [
              "Accordion 9 Content 1",
              "Accordion 9 Content 2",
              "Accordion 9 Content 3"
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab2]: {
        heading: "Sub Tab 2 Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Accordion 4",
            accordionBodyHeading: "Accordion 4 Heading",
            accordionBodyContent: [
              "Accordion 4 Content 1",
              "Accordion 4 Content 2",
              "Accordion 4 Content 3",
              "Accordion 4 Content 4"
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
              "Accordion 4 Content 3",
              "Accordion 4 Content 4"
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
              "Accordion 5 Content 4",
              "Accordion 5 Content 5"
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.SubTab4]: {
        heading: "Sub Tab 4 Concise",
        accordionItems: [
          {
            accordionTitle: "Accordion 10",
            accordionBodyHeading: "Accordion 10 Heading",
            accordionBodyContent: [
              "Accordion 10 Content 1",
              "Accordion 10 Content 2",
              "Accordion 10 Content 3",
              "Accordion 10 Content 4",
              "Accordion 10 Content 5"
            ],
          },
        ],
      },
    },
  },
  // Add more structures as necessary...
};
