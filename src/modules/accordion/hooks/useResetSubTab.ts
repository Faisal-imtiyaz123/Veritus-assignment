import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState} from "recoil"
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily"
import { AccordionIds } from "../types/accordion.types"
import { ACCORDION_SUB_NAVBAR_TABS } from "../lib/constants"


export const useResetSubTab = ()=>{
    const mainTabState = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.MAIN_TAB))
    const setSubTabState = useSetRecoilState(createActiveAccordionNavBarAtom(AccordionIds.SUB_TAB))
    useEffect(()=>{
    //@ts-expect-error will find a solution later
    setSubTabState(ACCORDION_SUB_NAVBAR_TABS[mainTabState]?.[0])
    },[mainTabState,setSubTabState])
}