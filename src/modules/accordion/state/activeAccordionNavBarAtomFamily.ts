import { memoize } from "lodash";
import { atom } from "recoil";
import { AccordionIds } from "../types/accordion.types";
import { ACCORDION_NAVBAR_TABS, ACCORDION_SUB_NAVBAR_TABS_ARRAY } from "../lib/constants";

export const createActiveAccordionNavBarAtom = memoize(<T extends string[]>(id: keyof typeof AccordionIds ) => {
  let defaultValue = '';
  if(id===AccordionIds.MAIN_TAB) defaultValue = ACCORDION_NAVBAR_TABS[0];
  if(id===AccordionIds.SUB_TAB) defaultValue = ACCORDION_SUB_NAVBAR_TABS_ARRAY[0];
  return atom<T[number]>({
    key: `activeAccordionNavBarAtom-${id}`,
    default: defaultValue, 
  });
});
