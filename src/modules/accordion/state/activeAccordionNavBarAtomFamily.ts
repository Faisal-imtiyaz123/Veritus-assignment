import { memoize } from "lodash";
import { atom } from "recoil";
import { AccordionIds } from "../types/accordion.types";

export const createActiveAccordionNavBarAtom = memoize(<T extends string[]>(id: keyof typeof AccordionIds,tabs:T ) => {
  return atom<T[number]>({
    key: `activeAccordionNavBarAtom-${id}`,
    default: tabs[0], 
  });
});
