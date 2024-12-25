import { AccordionNavbarSubTabsArray, AccordionNavbarTabs, AccordionNavBarTabsType, AccordionSubNavbarTabs } from "../types/constants.types";

export const ACCORDION_SUB_NAVBAR_TABS_ARRAY: AccordionNavbarSubTabsArray = [
  AccordionSubNavbarTabs.Overview,
  AccordionSubNavbarTabs.ResearchMethodology,
  AccordionSubNavbarTabs.DataAnalysis,
  AccordionSubNavbarTabs.Conclusion,
  AccordionSubNavbarTabs.References,
  AccordionSubNavbarTabs.Appendix,
];

export const ACCORDION_NAVBAR_TABS: AccordionNavBarTabsType = [
  AccordionNavbarTabs.QA,
  AccordionNavbarTabs.ManuscriptAnalysis,
  AccordionNavbarTabs.PeerReviewAnalysis,
  AccordionNavbarTabs.Concise,
  AccordionNavbarTabs.Introduction,
  AccordionNavbarTabs.Methodology,
  AccordionNavbarTabs.Conclusion,
];

export const ACCORDION_SUB_NAVBAR_TABS = {
  [AccordionNavbarTabs.QA]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.ManuscriptAnalysis]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.PeerReviewAnalysis]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.Concise]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.Introduction]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.Methodology]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
  [AccordionNavbarTabs.Conclusion]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Appendix,
  ],
};

export const ACCORDION_STRUCTURE = {
  [AccordionNavbarTabs.QA]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview QA",
        accordionItems: [
          {
            accordionTitle: "QA Overview 1",
            accordionBodyHeading: "Heading QA Overview 1",
            accordionBodyContent: [
              "Content 1 for QA Overview.",
              "Content 2 for QA Overview.",
              "Content 3 for QA Overview."
            ]
          },
          {
            accordionTitle: "QA Overview 2",
            accordionBodyHeading: "Heading QA Overview 2",
            accordionBodyContent: [
              "Content 1 for QA Overview 2.",
              "Content 2 for QA Overview 2.",
              "Content 3 for QA Overview 2."
            ]
          },
          {
            accordionTitle: "QA Overview 3",
            accordionBodyHeading: "Heading QA Overview 3",
            accordionBodyContent: [
              "Content 1 for QA Overview 3.",
              "Content 2 for QA Overview 3.",
              "Content 3 for QA Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology QA",
        accordionItems: [
          {
            accordionTitle: "QA Methodology 1",
            accordionBodyHeading: "Heading QA Methodology 1",
            accordionBodyContent: [
              "Content 1 for QA Methodology.",
              "Content 2 for QA Methodology.",
              "Content 3 for QA Methodology."
            ]
          },
          {
            accordionTitle: "QA Methodology 2",
            accordionBodyHeading: "Heading QA Methodology 2",
            accordionBodyContent: [
              "Content 1 for QA Methodology 2.",
              "Content 2 for QA Methodology 2.",
              "Content 3 for QA Methodology 2."
            ]
          },
          {
            accordionTitle: "QA Methodology 3",
            accordionBodyHeading: "Heading QA Methodology 3",
            accordionBodyContent: [
              "Content 1 for QA Methodology 3.",
              "Content 2 for QA Methodology 3.",
              "Content 3 for QA Methodology 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis QA",
        accordionItems: [
          {
            accordionTitle: "QA Data Analysis 1",
            accordionBodyHeading: "Heading QA Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for QA Data Analysis.",
              "Content 2 for QA Data Analysis.",
              "Content 3 for QA Data Analysis."
            ]
          },
          {
            accordionTitle: "QA Data Analysis 2",
            accordionBodyHeading: "Heading QA Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for QA Data Analysis 2.",
              "Content 2 for QA Data Analysis 2.",
              "Content 3 for QA Data Analysis 2."
            ]
          },
          {
            accordionTitle: "QA Data Analysis 3",
            accordionBodyHeading: "Heading QA Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for QA Data Analysis 3.",
              "Content 2 for QA Data Analysis 3.",
              "Content 3 for QA Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion QA",
        accordionItems: [
          {
            accordionTitle: "QA Conclusion 1",
            accordionBodyHeading: "Heading QA Conclusion 1",
            accordionBodyContent: [
              "Content 1 for QA Conclusion.",
              "Content 2 for QA Conclusion.",
              "Content 3 for QA Conclusion."
            ]
          },
          {
            accordionTitle: "QA Conclusion 2",
            accordionBodyHeading: "Heading QA Conclusion 2",
            accordionBodyContent: [
              "Content 1 for QA Conclusion 2.",
              "Content 2 for QA Conclusion 2.",
              "Content 3 for QA Conclusion 2."
            ]
          },
          {
            accordionTitle: "QA Conclusion 3",
            accordionBodyHeading: "Heading QA Conclusion 3",
            accordionBodyContent: [
              "Content 1 for QA Conclusion 3.",
              "Content 2 for QA Conclusion 3.",
              "Content 3 for QA Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References QA",
        accordionItems: [
          {
            accordionTitle: "QA References 1",
            accordionBodyHeading: "Heading QA References 1",
            accordionBodyContent: [
              "Content 1 for QA References.",
              "Content 2 for QA References.",
              "Content 3 for QA References."
            ]
          },
          {
            accordionTitle: "QA References 2",
            accordionBodyHeading: "Heading QA References 2",
            accordionBodyContent: [
              "Content 1 for QA References 2.",
              "Content 2 for QA References 2.",
              "Content 3 for QA References 2."
            ]
          },
          {
            accordionTitle: "QA References 3",
            accordionBodyHeading: "Heading QA References 3",
            accordionBodyContent: [
              "Content 1 for QA References 3.",
              "Content 2 for QA References 3.",
              "Content 3 for QA References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix QA",
        accordionItems: [
          {
            accordionTitle: "QA Appendix 1",
            accordionBodyHeading: "Heading QA Appendix 1",
            accordionBodyContent: [
              "Content 1 for QA Appendix.",
              "Content 2 for QA Appendix.",
              "Content 3 for QA Appendix."
            ]
          },
          {
            accordionTitle: "QA Appendix 2",
            accordionBodyHeading: "Heading QA Appendix 2",
            accordionBodyContent: [
              "Content 1 for QA Appendix 2.",
              "Content 2 for QA Appendix 2.",
              "Content 3 for QA Appendix 2."
            ]
          },
          {
            accordionTitle: "QA Appendix 3",
            accordionBodyHeading: "Heading QA Appendix 3",
            accordionBodyContent: [
              "Content 1 for QA Appendix 3.",
              "Content 2 for QA Appendix 3.",
              "Content 3 for QA Appendix 3."
            ]
          },
        ],
      },
    },
  },
  [AccordionNavbarTabs.ManuscriptAnalysis]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis Overview 1",
            accordionBodyHeading: "Heading Manuscript Analysis Overview 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Overview.",
              "Content 2 for Manuscript Analysis Overview.",
              "Content 3 for Manuscript Analysis Overview."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Overview 2",
            accordionBodyHeading: "Heading Manuscript Analysis Overview 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Overview 2.",
              "Content 2 for Manuscript Analysis Overview 2.",
              "Content 3 for Manuscript Analysis Overview 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Overview 3",
            accordionBodyHeading: "Heading Manuscript Analysis Overview 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Overview 3.",
              "Content 2 for Manuscript Analysis Overview 3.",
              "Content 3 for Manuscript Analysis Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis Methodology 1",
            accordionBodyHeading: "Heading Manuscript Analysis Methodology 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Methodology.",
              "Content 2 for Manuscript Analysis Methodology.",
              "Content 3 for Manuscript Analysis Methodology."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Methodology 2",
            accordionBodyHeading: "Heading Manuscript Analysis Methodology 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Methodology 2.",
              "Content 2 for Manuscript Analysis Methodology 2.",
              "Content 3 for Manuscript Analysis Methodology 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Methodology 3",
            accordionBodyHeading: "Heading Manuscript Analysis Methodology 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Methodology 3.",
              "Content 2 for Manuscript Analysis Methodology 3.",
              "Content 3 for Manuscript Analysis Methodology 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis Data Analysis 1",
            accordionBodyHeading: "Heading Manuscript Analysis Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Data Analysis.",
              "Content 2 for Manuscript Analysis Data Analysis.",
              "Content 3 for Manuscript Analysis Data Analysis."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Data Analysis 2",
            accordionBodyHeading: "Heading Manuscript Analysis Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Data Analysis 2.",
              "Content 2 for Manuscript Analysis Data Analysis 2.",
              "Content 3 for Manuscript Analysis Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Data Analysis 3",
            accordionBodyHeading: "Heading Manuscript Analysis Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Data Analysis 3.",
              "Content 2 for Manuscript Analysis Data Analysis 3.",
              "Content 3 for Manuscript Analysis Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis Conclusion 1",
            accordionBodyHeading: "Heading Manuscript Analysis Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Conclusion.",
              "Content 2 for Manuscript Analysis Conclusion.",
              "Content 3 for Manuscript Analysis Conclusion."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Conclusion 2",
            accordionBodyHeading: "Heading Manuscript Analysis Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Conclusion 2.",
              "Content 2 for Manuscript Analysis Conclusion 2.",
              "Content 3 for Manuscript Analysis Conclusion 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Conclusion 3",
            accordionBodyHeading: "Heading Manuscript Analysis Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Conclusion 3.",
              "Content 2 for Manuscript Analysis Conclusion 3.",
              "Content 3 for Manuscript Analysis Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis References 1",
            accordionBodyHeading: "Heading Manuscript Analysis References 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis References.",
              "Content 2 for Manuscript Analysis References.",
              "Content 3 for Manuscript Analysis References."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis References 2",
            accordionBodyHeading: "Heading Manuscript Analysis References 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis References 2.",
              "Content 2 for Manuscript Analysis References 2.",
              "Content 3 for Manuscript Analysis References 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis References 3",
            accordionBodyHeading: "Heading Manuscript Analysis References 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis References 3.",
              "Content 2 for Manuscript Analysis References 3.",
              "Content 3 for Manuscript Analysis References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Manuscript Analysis Appendix 1",
            accordionBodyHeading: "Heading Manuscript Analysis Appendix 1",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Appendix.",
              "Content 2 for Manuscript Analysis Appendix.",
              "Content 3 for Manuscript Analysis Appendix."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Appendix 2",
            accordionBodyHeading: "Heading Manuscript Analysis Appendix 2",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Appendix 2.",
              "Content 2 for Manuscript Analysis Appendix 2.",
              "Content 3 for Manuscript Analysis Appendix 2."
            ]
          },
          {
            accordionTitle: "Manuscript Analysis Appendix 3",
            accordionBodyHeading: "Heading Manuscript Analysis Appendix 3",
            accordionBodyContent: [
              "Content 1 for Manuscript Analysis Appendix 3.",
              "Content 2 for Manuscript Analysis Appendix 3.",
              "Content 3 for Manuscript Analysis Appendix 3."
            ]
          },
        ],
      },
    },
  },

  [AccordionNavbarTabs.PeerReviewAnalysis]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis Overview 1",
            accordionBodyHeading: "Heading Peer Review Analysis Overview 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Overview.",
              "Content 2 for Peer Review Analysis Overview.",
              "Content 3 for Peer Review Analysis Overview."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Overview 2",
            accordionBodyHeading: "Heading Peer Review Analysis Overview 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Overview 2.",
              "Content 2 for Peer Review Analysis Overview 2.",
              "Content 3 for Peer Review Analysis Overview 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Overview 3",
            accordionBodyHeading: "Heading Peer Review Analysis Overview 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Overview 3.",
              "Content 2 for Peer Review Analysis Overview 3.",
              "Content 3 for Peer Review Analysis Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis Methodology 1",
            accordionBodyHeading: "Heading Peer Review Analysis Methodology 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Methodology.",
              "Content 2 for Peer Review Analysis Methodology.",
              "Content 3 for Peer Review Analysis Methodology."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Methodology 2",
            accordionBodyHeading: "Heading Peer Review Analysis Methodology 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Methodology 2.",
              "Content 2 for Peer Review Analysis Methodology 2.",
              "Content 3 for Peer Review Analysis Methodology 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Methodology 3",
            accordionBodyHeading: "Heading Peer Review Analysis Methodology 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Methodology 3.",
              "Content 2 for Peer Review Analysis Methodology 3.",
              "Content 3 for Peer Review Analysis Methodology 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis Data Analysis 1",
            accordionBodyHeading: "Heading Peer Review Analysis Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Data Analysis.",
              "Content 2 for Peer Review Analysis Data Analysis.",
              "Content 3 for Peer Review Analysis Data Analysis."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Data Analysis 2",
            accordionBodyHeading: "Heading Peer Review Analysis Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Data Analysis 2.",
              "Content 2 for Peer Review Analysis Data Analysis 2.",
              "Content 3 for Peer Review Analysis Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Data Analysis 3",
            accordionBodyHeading: "Heading Peer Review Analysis Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Data Analysis 3.",
              "Content 2 for Peer Review Analysis Data Analysis 3.",
              "Content 3 for Peer Review Analysis Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis Conclusion 1",
            accordionBodyHeading: "Heading Peer Review Analysis Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Conclusion.",
              "Content 2 for Peer Review Analysis Conclusion.",
              "Content 3 for Peer Review Analysis Conclusion."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Conclusion 2",
            accordionBodyHeading: "Heading Peer Review Analysis Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Conclusion 2.",
              "Content 2 for Peer Review Analysis Conclusion 2.",
              "Content 3 for Peer Review Analysis Conclusion 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Conclusion 3",
            accordionBodyHeading: "Heading Peer Review Analysis Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Conclusion 3.",
              "Content 2 for Peer Review Analysis Conclusion 3.",
              "Content 3 for Peer Review Analysis Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis References 1",
            accordionBodyHeading: "Heading Peer Review Analysis References 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis References.",
              "Content 2 for Peer Review Analysis References.",
              "Content 3 for Peer Review Analysis References."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis References 2",
            accordionBodyHeading: "Heading Peer Review Analysis References 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis References 2.",
              "Content 2 for Peer Review Analysis References 2.",
              "Content 3 for Peer Review Analysis References 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis References 3",
            accordionBodyHeading: "Heading Peer Review Analysis References 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis References 3.",
              "Content 2 for Peer Review Analysis References 3.",
              "Content 3 for Peer Review Analysis References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Peer Review Analysis",
        accordionItems: [
          {
            accordionTitle: "Peer Review Analysis Appendix 1",
            accordionBodyHeading: "Heading Peer Review Analysis Appendix 1",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Appendix.",
              "Content 2 for Peer Review Analysis Appendix.",
              "Content 3 for Peer Review Analysis Appendix."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Appendix 2",
            accordionBodyHeading: "Heading Peer Review Analysis Appendix 2",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Appendix 2.",
              "Content 2 for Peer Review Analysis Appendix 2.",
              "Content 3 for Peer Review Analysis Appendix 2."
            ]
          },
          {
            accordionTitle: "Peer Review Analysis Appendix 3",
            accordionBodyHeading: "Heading Peer Review Analysis Appendix 3",
            accordionBodyContent: [
              "Content 1 for Peer Review Analysis Appendix 3.",
              "Content 2 for Peer Review Analysis Appendix 3.",
              "Content 3 for Peer Review Analysis Appendix 3."
            ]
          },
        ],
      },
    },
  },

  [AccordionNavbarTabs.Concise]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Concise",
        accordionItems: [
          {
            accordionTitle: "Concise Overview 1",
            accordionBodyHeading: "Heading Concise Overview 1",
            accordionBodyContent: [
              "Content 1 for Concise Overview.",
              "Content 2 for Concise Overview.",
              "Content 3 for Concise Overview."
            ]
          },
          {
            accordionTitle: "Concise Overview 2",
            accordionBodyHeading: "Heading Concise Overview 2",
            accordionBodyContent: [
              "Content 1 for Concise Overview 2.",
              "Content 2 for Concise Overview 2.",
              "Content 3 for Concise Overview 2."
            ]
          },
          {
            accordionTitle: "Concise Overview 3",
            accordionBodyHeading: "Heading Concise Overview 3",
            accordionBodyContent: [
              "Content 1 for Concise Overview 3.",
              "Content 2 for Concise Overview 3.",
              "Content 3 for Concise Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Concise",
        accordionItems: [
          {
            accordionTitle: "Concise Methodology 1",
            accordionBodyHeading: "Heading Concise Methodology 1",
            accordionBodyContent: [
              "Content 1 for Concise Methodology.",
              "Content 2 for Concise Methodology.",
              "Content 3 for Concise Methodology."
            ]
          },
          {
            accordionTitle: "Concise Methodology 2",
            accordionBodyHeading: "Heading Concise Methodology 2",
            accordionBodyContent: [
              "Content 1 for Concise Methodology 2.",
              "Content 2 for Concise Methodology 2.",
              "Content 3 for Concise Methodology 2."
            ]
          },
          {
            accordionTitle: "Concise Methodology 3",
            accordionBodyHeading: "Heading Concise Methodology 3",
            accordionBodyContent: [
              "Content 1 for Concise Methodology 3.",
              "Content 2 for Concise Methodology 3.",
              "Content 3 for Concise Methodology 3.",
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Concise",
        accordionItems: [
          {
            accordionTitle: "Concise Data Analysis 1",
            accordionBodyHeading: "Heading Concise Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Concise Data Analysis.",
              "Content 2 for Concise Data Analysis.",
              "Content 3 for Concise Data Analysis."
            ]
          },
          {
            accordionTitle: "Concise Data Analysis 2",
            accordionBodyHeading: "Heading Concise Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Concise Data Analysis 2.",
              "Content 2 for Concise Data Analysis 2.",
              "Content 3 for Concise Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Concise Data Analysis 3",
            accordionBodyHeading: "Heading Concise Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Concise Data Analysis 3.",
              "Content 2 for Concise Data Analysis 3.",
              "Content 3 for Concise Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Concise",
        accordionItems: [
          {
            accordionTitle: "Concise Conclusion 1",
            accordionBodyHeading: "Heading Concise Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Concise Conclusion.",
              "Content 2 for Concise Conclusion.",
              "Content 3 for Concise Conclusion."
            ]
          },
          {
            accordionTitle: "Concise Conclusion 2",
            accordionBodyHeading: "Heading Concise Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Concise Conclusion 2.",
              "Content 2 for Concise Conclusion 2.",
              "Content 3 for Concise Conclusion 2."
            ]
          },
          {
            accordionTitle: "Concise Conclusion 3",
            accordionBodyHeading: "Heading Concise Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Concise Conclusion 3.",
              "Content 2 for Concise Conclusion 3.",
              "Content 3 for Concise Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Concise",
        accordionItems: [
          {
            accordionTitle: "Concise References 1",
            accordionBodyHeading: "Heading Concise References 1",
            accordionBodyContent: [
              "Content 1 for Concise References.",
              "Content 2 for Concise References.",
              "Content 3 for Concise References."
            ]
          },
          {
            accordionTitle: "Concise References 2",
            accordionBodyHeading: "Heading Concise References 2",
            accordionBodyContent: [
              "Content 1 for Concise References 2.",
              "Content 2 for Concise References 2.",
              "Content 3 for Concise References 2."
            ]
          },
          {
            accordionTitle: "Concise References 3",
            accordionBodyHeading: "Heading Concise References 3",
            accordionBodyContent: [
              "Content 1 for Concise References 3.",
              "Content 2 for Concise References 3.",
              "Content 3 for Concise References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Concise",
        accordionItems: [
          {
            accordionTitle: "Concise Appendix 1",
            accordionBodyHeading: "Heading Concise Appendix 1",
            accordionBodyContent: [
              "Content 1 for Concise Appendix.",
              "Content 2 for Concise Appendix.",
              "Content 3 for Concise Appendix."
            ]
          },
          {
            accordionTitle: "Concise Appendix 2",
            accordionBodyHeading: "Heading Concise Appendix 2",
            accordionBodyContent: [
              "Content 1 for Concise Appendix 2.",
              "Content 2 for Concise Appendix 2.",
              "Content 3 for Concise Appendix 2."
            ]
          },
          {
            accordionTitle: "Concise Appendix 3",
            accordionBodyHeading: "Heading Concise Appendix 3",
            accordionBodyContent: [
              "Content 1 for Concise Appendix 3.",
              "Content 2 for Concise Appendix 3.",
              "Content 3 for Concise Appendix 3."
            ]
          },
        ],
      },
    },
  },

  [AccordionNavbarTabs.Introduction]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction Overview 1",
            accordionBodyHeading: "Heading Introduction Overview 1",
            accordionBodyContent: [
              "Content 1 for Introduction Overview.",
              "Content 2 for Introduction Overview.",
              "Content 3 for Introduction Overview."
            ]
          },
          {
            accordionTitle: "Introduction Overview 2",
            accordionBodyHeading: "Heading Introduction Overview 2",
            accordionBodyContent: [
              "Content 1 for Introduction Overview 2.",
              "Content 2 for Introduction Overview 2.",
              "Content 3 for Introduction Overview 2."
            ]
          },
          {
            accordionTitle: "Introduction Overview 3",
            accordionBodyHeading: "Heading Introduction Overview 3",
            accordionBodyContent: [
              "Content 1 for Introduction Overview 3.",
              "Content 2 for Introduction Overview 3.",
              "Content 3 for Introduction Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction Methodology 1",
            accordionBodyHeading: "Heading Introduction Methodology 1",
            accordionBodyContent: [
              "Content 1 for Introduction Methodology.",
              "Content 2 for Introduction Methodology.",
              "Content 3 for Introduction Methodology."
            ]
          },
          {
            accordionTitle: "Introduction Methodology 2",
            accordionBodyHeading: "Heading Introduction Methodology 2",
            accordionBodyContent: [
              "Content 1 for Introduction Methodology 2.",
              "Content 2 for Introduction Methodology 2.",
              "Content 3 for Introduction Methodology 2."
            ]
          },
          {
            accordionTitle: "Introduction Methodology 3",
            accordionBodyHeading: "Heading Introduction Methodology 3",
            accordionBodyContent: [
              "Content 1 for Introduction Methodology 3.",
              "Content 2 for Introduction Methodology 3.",
              "Content 3 for Introduction Methodology 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction Data Analysis 1",
            accordionBodyHeading: "Heading Introduction Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Introduction Data Analysis.",
              "Content 2 for Introduction Data Analysis.",
              "Content 3 for Introduction Data Analysis."
            ]
          },
          {
            accordionTitle: "Introduction Data Analysis 2",
            accordionBodyHeading: "Heading Introduction Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Introduction Data Analysis 2.",
              "Content 2 for Introduction Data Analysis 2.",
              "Content 3 for Introduction Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Introduction Data Analysis 3",
            accordionBodyHeading: "Heading Introduction Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Introduction Data Analysis 3.",
              "Content 2 for Introduction Data Analysis 3.",
              "Content 3 for Introduction Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction Conclusion 1",
            accordionBodyHeading: "Heading Introduction Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Introduction Conclusion.",
              "Content 2 for Introduction Conclusion.",
              "Content 3 for Introduction Conclusion."
            ]
          },
          {
            accordionTitle: "Introduction Conclusion 2",
            accordionBodyHeading: "Heading Introduction Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Introduction Conclusion 2.",
              "Content 2 for Introduction Conclusion 2.",
              "Content 3 for Introduction Conclusion 2."
            ]
          },
          {
            accordionTitle: "Introduction Conclusion 3",
            accordionBodyHeading: "Heading Introduction Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Introduction Conclusion 3.",
              "Content 2 for Introduction Conclusion 3.",
              "Content 3 for Introduction Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction References 1",
            accordionBodyHeading: "Heading Introduction References 1",
            accordionBodyContent: [
              "Content 1 for Introduction References.",
              "Content 2 for Introduction References.",
              "Content 3 for Introduction References."
            ]
          },
          {
            accordionTitle: "Introduction References 2",
            accordionBodyHeading: "Heading Introduction References 2",
            accordionBodyContent: [
              "Content 1 for Introduction References 2.",
              "Content 2 for Introduction References 2.",
              "Content 3 for Introduction References 2."
            ]
          },
          {
            accordionTitle: "Introduction References 3",
            accordionBodyHeading: "Heading Introduction References 3",
            accordionBodyContent: [
              "Content 1 for Introduction References 3.",
              "Content 2 for Introduction References 3.",
              "Content 3 for Introduction References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Introduction",
        accordionItems: [
          {
            accordionTitle: "Introduction Appendix 1",
            accordionBodyHeading: "Heading Introduction Appendix 1",
            accordionBodyContent: [
              "Content 1 for Introduction Appendix.",
              "Content 2 for Introduction Appendix.",
              "Content 3 for Introduction Appendix."
            ]
          },
          {
            accordionTitle: "Introduction Appendix 2",
            accordionBodyHeading: "Heading Introduction Appendix 2",
            accordionBodyContent: [
              "Content 1 for Introduction Appendix 2.",
              "Content 2 for Introduction Appendix 2.",
              "Content 3 for Introduction Appendix 2."
            ]
          },
          {
            accordionTitle: "Introduction Appendix 3",
            accordionBodyHeading: "Heading Introduction Appendix 3",
            accordionBodyContent: [
              "Content 1 for Introduction Appendix 3.",
              "Content 2 for Introduction Appendix 3.",
              "Content 3 for Introduction Appendix 3."
            ]
          },
        ],
      },
    },
  },

  [AccordionNavbarTabs.Methodology]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology Overview 1",
            accordionBodyHeading: "Heading Methodology Overview 1",
            accordionBodyContent: [
              "Content 1 for Methodology Overview.",
              "Content 2 for Methodology Overview.",
              "Content 3 for Methodology Overview."
            ]
          },
          {
            accordionTitle: "Methodology Overview 2",
            accordionBodyHeading: "Heading Methodology Overview 2",
            accordionBodyContent: [
              "Content 1 for Methodology Overview 2.",
              "Content 2 for Methodology Overview 2.",
              "Content 3 for Methodology Overview 2."
            ]
          },
          {
            accordionTitle: "Methodology Overview 3",
            accordionBodyHeading: "Heading Methodology Overview 3",
            accordionBodyContent: [
              "Content 1 for Methodology Overview 3.",
              "Content 2 for Methodology Overview 3.",
              "Content 3 for Methodology Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology Methodology 1",
            accordionBodyHeading: "Heading Methodology Methodology 1",
            accordionBodyContent: [
              "Content 1 for Methodology Methodology.",
              "Content 2 for Methodology Methodology.",
              "Content 3 for Methodology Methodology."
            ]
          },
          {
            accordionTitle: "Methodology Methodology 2",
            accordionBodyHeading: "Heading Methodology Methodology 2",
            accordionBodyContent: [
              "Content 1 for Methodology Methodology 2.",
              "Content 2 for Methodology Methodology 2.",
              "Content 3 for Methodology Methodology 2."
            ]
          },
          {
            accordionTitle: "Methodology Methodology 3",
            accordionBodyHeading: "Heading Methodology Methodology 3",
            accordionBodyContent: [
              "Content 1 for Methodology Methodology 3.",
              "Content 2 for Methodology Methodology 3.",
              "Content 3 for Methodology Methodology 3.",
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology Data Analysis 1",
            accordionBodyHeading: "Heading Methodology Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Methodology Data Analysis.",
              "Content 2 for Methodology Data Analysis.",
              "Content 3 for Methodology Data Analysis."
            ]
          },
          {
            accordionTitle: "Methodology Data Analysis 2",
            accordionBodyHeading: "Heading Methodology Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Methodology Data Analysis 2.",
              "Content 2 for Methodology Data Analysis 2.",
              "Content 3 for Methodology Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Methodology Data Analysis 3",
            accordionBodyHeading: "Heading Methodology Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Methodology Data Analysis 3.",
              "Content 2 for Methodology Data Analysis 3.",
              "Content 3 for Methodology Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology Conclusion 1",
            accordionBodyHeading: "Heading Methodology Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Methodology Conclusion.",
              "Content 2 for Methodology Conclusion.",
              "Content 3 for Methodology Conclusion."
            ]
          },
          {
            accordionTitle: "Methodology Conclusion 2",
            accordionBodyHeading: "Heading Methodology Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Methodology Conclusion 2.",
              "Content 2 for Methodology Conclusion 2.",
              "Content 3 for Methodology Conclusion 2."
            ]
          },
          {
            accordionTitle: "Methodology Conclusion 3",
            accordionBodyHeading: "Heading Methodology Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Methodology Conclusion 3.",
              "Content 2 for Methodology Conclusion 3.",
              "Content 3 for Methodology Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology References 1",
            accordionBodyHeading: "Heading Methodology References 1",
            accordionBodyContent: [
              "Content 1 for Methodology References.",
              "Content 2 for Methodology References.",
              "Content 3 for Methodology References."
            ]
          },
          {
            accordionTitle: "Methodology References 2",
            accordionBodyHeading: "Heading Methodology References 2",
            accordionBodyContent: [
              "Content 1 for Methodology References 2.",
              "Content 2 for Methodology References 2.",
              "Content 3 for Methodology References 2."
            ]
          },
          {
            accordionTitle: "Methodology References 3",
            accordionBodyHeading: "Heading Methodology References 3",
            accordionBodyContent: [
              "Content 1 for Methodology References 3.",
              "Content 2 for Methodology References 3.",
              "Content 3 for Methodology References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Methodology",
        accordionItems: [
          {
            accordionTitle: "Methodology Appendix 1",
            accordionBodyHeading: "Heading Methodology Appendix 1",
            accordionBodyContent: [
              "Content 1 for Methodology Appendix.",
              "Content 2 for Methodology Appendix.",
              "Content 3 for Methodology Appendix."
            ]
          },
          {
            accordionTitle: "Methodology Appendix 2",
            accordionBodyHeading: "Heading Methodology Appendix 2",
            accordionBodyContent: [
              "Content 1 for Methodology Appendix 2.",
              "Content 2 for Methodology Appendix 2.",
              "Content 3 for Methodology Appendix 2."
            ]
          },
          {
            accordionTitle: "Methodology Appendix 3",
            accordionBodyHeading: "Heading Methodology Appendix 3",
            accordionBodyContent: [
              "Content 1 for Methodology Appendix 3.",
              "Content 2 for Methodology Appendix 3.",
              "Content 3 for Methodology Appendix 3."
            ]
          },
        ],
      },
    },
  },

  [AccordionNavbarTabs.Discussion]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Overview Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion Overview 1",
            accordionBodyHeading: "Heading Discussion Overview 1",
            accordionBodyContent: [
              "Content 1 for Discussion Overview.",
              "Content 2 for Discussion Overview.",
              "Content 3 for Discussion Overview."
            ]
          },
          {
            accordionTitle: "Discussion Overview 2",
            accordionBodyHeading: "Heading Discussion Overview 2",
            accordionBodyContent: [
              "Content 1 for Discussion Overview 2.",
              "Content 2 for Discussion Overview 2.",
              "Content 3 for Discussion Overview 2."
            ]
          },
          {
            accordionTitle: "Discussion Overview 3",
            accordionBodyHeading: "Heading Discussion Overview 3",
            accordionBodyContent: [
              "Content 1 for Discussion Overview 3.",
              "Content 2 for Discussion Overview 3.",
              "Content 3 for Discussion Overview 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Research Methodology Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion Methodology 1",
            accordionBodyHeading: "Heading Discussion Methodology 1",
            accordionBodyContent: [
              "Content 1 for Discussion Methodology.",
              "Content 2 for Discussion Methodology.",
              "Content 3 for Discussion Methodology."
            ]
          },
          {
            accordionTitle: "Discussion Methodology 2",
            accordionBodyHeading: "Heading Discussion Methodology 2",
            accordionBodyContent: [
              "Content 1 for Discussion Methodology 2.",
              "Content 2 for Discussion Methodology 2.",
              "Content 3 for Discussion Methodology 2."
            ]
          },
          {
            accordionTitle: "Discussion Methodology 3",
            accordionBodyHeading: "Heading Discussion Methodology 3",
            accordionBodyContent: [
              "Content 1 for Discussion Methodology 3.",
              "Content 2 for Discussion Methodology 3.",
              "Content 3 for Discussion Methodology 3.",
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Data Analysis Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion Data Analysis 1",
            accordionBodyHeading: "Heading Discussion Data Analysis 1",
            accordionBodyContent: [
              "Content 1 for Discussion Data Analysis.",
              "Content 2 for Discussion Data Analysis.",
              "Content 3 for Discussion Data Analysis."
            ]
          },
          {
            accordionTitle: "Discussion Data Analysis 2",
            accordionBodyHeading: "Heading Discussion Data Analysis 2",
            accordionBodyContent: [
              "Content 1 for Discussion Data Analysis 2.",
              "Content 2 for Discussion Data Analysis 2.",
              "Content 3 for Discussion Data Analysis 2."
            ]
          },
          {
            accordionTitle: "Discussion Data Analysis 3",
            accordionBodyHeading: "Heading Discussion Data Analysis 3",
            accordionBodyContent: [
              "Content 1 for Discussion Data Analysis 3.",
              "Content 2 for Discussion Data Analysis 3.",
              "Content 3 for Discussion Data Analysis 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Conclusion Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion Conclusion 1",
            accordionBodyHeading: "Heading Discussion Conclusion 1",
            accordionBodyContent: [
              "Content 1 for Discussion Conclusion.",
              "Content 2 for Discussion Conclusion.",
              "Content 3 for Discussion Conclusion."
            ]
          },
          {
            accordionTitle: "Discussion Conclusion 2",
            accordionBodyHeading: "Heading Discussion Conclusion 2",
            accordionBodyContent: [
              "Content 1 for Discussion Conclusion 2.",
              "Content 2 for Discussion Conclusion 2.",
              "Content 3 for Discussion Conclusion 2."
            ]
          },
          {
            accordionTitle: "Discussion Conclusion 3",
            accordionBodyHeading: "Heading Discussion Conclusion 3",
            accordionBodyContent: [
              "Content 1 for Discussion Conclusion 3.",
              "Content 2 for Discussion Conclusion 3.",
              "Content 3 for Discussion Conclusion 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.References]: {
        heading: "References Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion References 1",
            accordionBodyHeading: "Heading Discussion References 1",
            accordionBodyContent: [
              "Content 1 for Discussion References.",
              "Content 2 for Discussion References.",
              "Content 3 for Discussion References."
            ]
          },
          {
            accordionTitle: "Discussion References 2",
            accordionBodyHeading: "Heading Discussion References 2",
            accordionBodyContent: [
              "Content 1 for Discussion References 2.",
              "Content 2 for Discussion References 2.",
              "Content 3 for Discussion References 2."
            ]
          },
          {
            accordionTitle: "Discussion References 3",
            accordionBodyHeading: "Heading Discussion References 3",
            accordionBodyContent: [
              "Content 1 for Discussion References 3.",
              "Content 2 for Discussion References 3.",
              "Content 3 for Discussion References 3."
            ]
          },
        ],
      },
      [AccordionSubNavbarTabs.Appendix]: {
        heading: "Appendix Discussion",
        accordionItems: [
          {
            accordionTitle: "Discussion Appendix 1",
            accordionBodyHeading: "Heading Discussion Appendix 1",
            accordionBodyContent: [
              "Content 1 for Discussion Appendix.",
              "Content 2 for Discussion Appendix.",
              "Content 3 for Discussion Appendix."
            ]
          },
          {
            accordionTitle: "Discussion Appendix 2",
            accordionBodyHeading: "Heading Discussion Appendix 2",
            accordionBodyContent: [
              "Content 1 for Discussion Appendix 2.",
              "Content 2 for Discussion Appendix 2.",
              "Content 3 for Discussion Appendix 2."
            ]
          },
          {
            accordionTitle: "Discussion Appendix 3",
            accordionBodyHeading: "Heading Discussion Appendix 3",
            accordionBodyContent: [
              "Content 1 for Discussion Appendix 3.",
              "Content 2 for Discussion Appendix 3.",
              "Content 3 for Discussion Appendix 3."
            ]
          },
        ],
      },
    },
  },
};
          
