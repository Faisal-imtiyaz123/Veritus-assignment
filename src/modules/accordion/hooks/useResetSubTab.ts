import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState} from "recoil"
import { createActiveAccordionNavBarAtom } from "../state/activeAccordionNavBarAtomFamily"
import { AccordionIds } from "../types/accordion.types"


export const useResetSubTab = ()=>{
    const mainTabState = useRecoilValue(createActiveAccordionNavBarAtom(AccordionIds.MAIN_TAB))
    const resetSubTabState= useResetRecoilState(createActiveAccordionNavBarAtom(AccordionIds.SUB_TAB))
    useEffect(()=>{
    resetSubTabState()
    },[mainTabState,resetSubTabState])
}