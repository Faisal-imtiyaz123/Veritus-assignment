
import GlobalStyles from "./styles/globalStyles";
import AccordionNavBar from "./modules/accordion/components/AccordionNavBar";
import { AccordionIds } from "./modules/accordion/types/accordion.types";
import { ACCORDION_NAVBAR_TABS, ACCORDION_SUB_NAVBAR_TABS } from "./modules/accordion/lib/constants";
import { useRecoilValue } from "recoil";
import { createActiveAccordionNavBarAtom } from "./modules/accordion/state/activeAccordionNavBarAtomFamily";
import {  AccordionNavBarTabsType } from "./modules/accordion/types/constants.types";

const App = () => {
  const activeParentTab = useRecoilValue(createActiveAccordionNavBarAtom<AccordionNavBarTabsType>(AccordionIds.MAIN_TAB,ACCORDION_NAVBAR_TABS));
  return (
    <div style={{ maxWidth: "50rem", border: "1px solid #ccc" }}>
      <GlobalStyles />
      <AccordionNavBar
        tabs={ACCORDION_NAVBAR_TABS}
        id={AccordionIds.MAIN_TAB}
      />
        <AccordionNavBar
          tabs={ACCORDION_SUB_NAVBAR_TABS[activeParentTab as keyof typeof ACCORDION_SUB_NAVBAR_TABS]}
          id={AccordionIds.SUB_TAB}
        />

    </div>
  );
};

export default App;