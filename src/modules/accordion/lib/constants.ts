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
  AccordionNavbarTabs.References,
  AccordionNavbarTabs.Appendix,
  AccordionNavbarTabs.Discussion,
  AccordionNavbarTabs.FurtherWork,
];

export const ACCORDION_SUB_NAVBAR_TABS = {
  [AccordionNavbarTabs.QA]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.ResearchMethodology,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.Conclusion
  ],
  [AccordionNavbarTabs.ManuscriptAnalysis]: [
    AccordionSubNavbarTabs.References,
    AccordionSubNavbarTabs.Conclusion
  ],
  [AccordionNavbarTabs.Concise]: [
    AccordionSubNavbarTabs.Overview,
    AccordionSubNavbarTabs.DataAnalysis,
    AccordionSubNavbarTabs.References
  ],
  [AccordionNavbarTabs.Introduction]: [
    AccordionSubNavbarTabs.Conclusion,
    AccordionSubNavbarTabs.DataAnalysis
  ],

};

export const ACCORDION_STRUCTURE = {
  [AccordionNavbarTabs.QA]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Sub Tab 1 In Detail",
        accordionItems: [
          {
            accordionTitle: "Overview of QA Process",
            accordionBodyHeading: "Introduction to QA",
            accordionBodyContent: [
              "The QA process involves systematic procedures to ensure quality control throughout the project lifecycle.",
              "It starts with requirement gathering and extends to final product testing, ensuring that the final deliverable meets quality standards.",
              "Various tools and methodologies are used to automate testing and improve efficiency."
            ],
          },
          {
            accordionTitle: "Testing Strategies",
            accordionBodyHeading: "Key Testing Strategies",
            accordionBodyContent: [
              "Manual testing involves testing the application by hand, ensuring its functionality matches user expectations.",
              "Automated testing helps in speeding up the testing process by using scripts and tools to perform repetitive tasks.",
              "Exploratory testing is an approach where testers explore the application to find potential bugs without pre-defined scripts."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.ResearchMethodology]: {
        heading: "Sub Tab 2 In Detail",
        accordionItems: [
          {
            accordionTitle: "Test Planning",
            accordionBodyHeading: "Test Plan Development",
            accordionBodyContent: [
              "A test plan defines the approach to be used for testing, including timelines, resources, and methodologies.",
              "It is critical to develop a test plan before testing starts to ensure all aspects of the application are covered.",
              "The plan also outlines the test case development process and defines the metrics for evaluating success."
            ],
          },
          {
            accordionTitle: "Test Execution",
            accordionBodyHeading: "Executing the Tests",
            accordionBodyContent: [
              "Test execution involves running the test cases against the application and recording the results.",
              "This stage is crucial to identifying defects and ensuring the software meets quality requirements.",
              "The execution phase often includes both functional and non-functional testing (e.g., performance testing)."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Sub Tab 3 In Detail",
        accordionItems: [
          {
            accordionTitle: "Bug Tracking",
            accordionBodyHeading: "Identifying and Tracking Bugs",
            accordionBodyContent: [
              "Bug tracking involves capturing defects in the software during the testing phase.",
              "A bug tracking system allows QA teams to monitor the status of each bug, from identification to resolution.",
              "Effective bug tracking ensures that issues are addressed promptly and do not affect the product release timeline."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Sub Tab 4 In Detail",
        accordionItems: [
          {
            accordionTitle: "Final QA Report",
            accordionBodyHeading: "Creating the QA Report",
            accordionBodyContent: [
              "The final QA report summarizes the testing efforts, the number of defects found, and the overall quality of the product.",
              "It includes key metrics such as the pass/fail ratio of tests, defect severity, and the success of test execution.",
              "This report helps stakeholders make informed decisions about releasing the product."
            ],
          },
        ],
      },
    },
  },
  [AccordionNavbarTabs.ManuscriptAnalysis]: {
    subTabs: {
      [AccordionSubNavbarTabs.References]: {
        heading: "Sub Tab 1 Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Analyzing Structure of Manuscript",
            accordionBodyHeading: "Understanding the Structure",
            accordionBodyContent: [
              "A well-structured manuscript follows a clear outline, making it easy for the reader to navigate through the research.",
              "The introduction provides the background of the research, while the methodology section explains the approach taken.",
              "Data analysis and results are presented in a structured format, followed by the conclusion and references."
            ],
          },
          {
            accordionTitle: "Quality of Writing",
            accordionBodyHeading: "Writing Style and Clarity",
            accordionBodyContent: [
              "The manuscript should be written clearly and concisely, with a focus on conveying complex ideas simply.",
              "Sentence structure, grammar, and spelling are important for readability and credibility.",
              "The writing should be engaging while staying objective and formal."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Sub Tab 2 Manuscript Analysis",
        accordionItems: [
          {
            accordionTitle: "Analyzing the Literature Review",
            accordionBodyHeading: "Review of Related Literature",
            accordionBodyContent: [
              "The literature review provides a comprehensive analysis of existing research in the field.",
              "It identifies gaps in current research and shows how the manuscript contributes to advancing knowledge.",
              "An effective literature review is objective, comprehensive, and well-organized."
            ],
          },
        ],
      },
    },
  },
  [AccordionNavbarTabs.Concise]: {
    subTabs: {
      [AccordionSubNavbarTabs.Overview]: {
        heading: "Sub Tab 2 Concise",
        accordionItems: [
          {
            accordionTitle: "Summary of Key Findings",
            accordionBodyHeading: "Findings in Brief",
            accordionBodyContent: [
              "The concise section should highlight the most significant findings of the research.",
              "It should focus on providing key insights without going into excessive detail.",
              "Summarizing key findings helps readers understand the core message of the research."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.DataAnalysis]: {
        heading: "Sub Tab 3 Concise",
        accordionItems: [
          {
            accordionTitle: "Recommendations",
            accordionBodyHeading: "Providing Actionable Recommendations",
            accordionBodyContent: [
              "The recommendations section should offer clear and actionable suggestions based on the research findings.",
              "These recommendations may be for future research or practical applications in the relevant field.",
              "The recommendations should be concise but impactful."
            ],
          },
        ],
      },
      [AccordionSubNavbarTabs.Conclusion]: {
        heading: "Sub Tab 4 Concise",
        accordionItems: [
          {
            accordionTitle: "Conclusion and Future Work",
            accordionBodyHeading: "Concluding the Research",
            accordionBodyContent: [
              "The conclusion summarizes the research and reflects on its significance.",
              "It is important to briefly revisit the research question and address whether it was answered.",
              "Future work may involve exploring unanswered questions or refining methodologies."
            ],
          },
        ],
      },
    },
  },
};
