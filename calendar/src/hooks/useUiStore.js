import { useDispatch, useSelector } from "react-redux"
import { oncloseDateModal,  onOpenDateModal} from "../store";


export const useUiStore = () => {
   
const dispatch = useDispatch();

 const { isDateModalOpen }
  = useSelector (state =>  state.ui);
   
const openDateModal =() => {
    dispatch ( onOpenDateModal() )
}
const closeDateModal = () => {
    dispatch  ( oncloseDateModal() );
}
const toggleDateModal = () => {
    ( isDateModalOpen )
    ? openDateModal()
    : closeDateModal()
}

return{
// *PROPIEDADES
isDateModalOpen,
// *METODOS
closeDateModal,
openDateModal,
toggleDateModal

}
}