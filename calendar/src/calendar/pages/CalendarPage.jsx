import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'


import { CalendarBoxEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from "../"
import { localizer, getMessagesES} from '../../helpers'
import { useUiStore, useCalendarStore } from '../../hooks';




export const CalendarPage = () => {

const { openDateModal } = useUiStore();
const { events, setActiveEvent } = useCalendarStore();
const [lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week');
const eventStyleGetter = ( event, start, end, isSelected) => {

 const style =  {
    backgroundColor: '#40E0D0',
    borderRadius: '0px',
    opacity: '0.8',
    color: 'black'

} 

 return {
    style
  }
  }

  const onDoubleClick = ( event ) => {
    // console.log({ DoubleClick: event });
    openDateModal(event);
  }
  
  const onSelect = (event) => {
  setActiveEvent ( event );
  }

  const onViewChanged = (event) => {
   localStorage.setItem('lastView', event);
  setLastView (event);
  }
    
     return ( 
    
    <>
        <NavBar/>

        <Calendar
            culture='es'  
            localizer= {localizer}
            events={events}
            defaultView= {lastView}
            startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)'}}
      messages={getMessagesES() }
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarBoxEvent
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChanged }
    />
    <CalendarModal/>
    <FabAddNew/>
    <FabDelete/>
    </>
  )

     }
