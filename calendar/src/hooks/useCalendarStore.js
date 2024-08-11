import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from '../store'
import { onAddNewEvent, onDeleteEvent, onUpDateEvent } from "../store/calendar/calendarSlice";



export const useCalendarStore = () => {


const dispatch = useDispatch();
const { events, activeEvent } = useSelector (state => state.calendar);
 
const setActiveEvent = ( calendarEvent ) => {
  dispatch ( onSetActiveEvent  (calendarEvent))
}

const startSavingEvent  = async(calendarEvent) => {
 //TODO LLEGAR AL BACKEND

  // Convertir los objetos Date a timestamps (que son serializables) CHAT GPT
 const eventToSave = {
  ...calendarEvent,
  start: calendarEvent.start.getTime(),  // o .toISOString()
  end: calendarEvent.end.getTime(),};
//


 //TODO BIEN
 if(calendarEvent._id){
  //ACTUALIZANDO
  dispatch(onUpDateEvent( {...calendarEvent} ));

 }
 else {
  //CREANDO
  dispatch (onAddNewEvent ({ ...calendarEvent, _id:new Date().getTime()}))
}

}

const deleteEvent = () =>{
dispatch(onDeleteEvent());

}


return { 
   
//PROPIEDADES
activeEvent,
events,

//METODOS
setActiveEvent,
startSavingEvent,
deleteEvent,

}
}
