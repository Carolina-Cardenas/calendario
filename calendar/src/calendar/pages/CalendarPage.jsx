
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import{ addHours } from "date-fns"


import { CalendarBoxEvent, NavBar } from "../"
import { localizer, getMessagesES} from '../../helpers'
import { useState } from 'react';



export const CalendarPage = () => {

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

  const onDoubleClick = (event) => {
    console.log({ DoubleClick: event });
  }
  
  const onSelect = (event) => {
    console.log({ Click: event });
  }

  const onViewChanged = (event) => {
   localStorage.setItem('lastView', event);
  setLastView (event);
  }
 
 
  

     const events = [{
       title: 'agregar paciente',
       notes: 'datos del paciente',
       start:  new Date(),
       end: addHours (new Date(),2),
       bgColor:'#fafafa',
       user: {
        _id: '123',
        name: 'Nataly'
       }

     }];
  
    //  const handleViewChange = (view) => {
    //     localStorage.setItem('calendarView', view);
    
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

    </>
  )

     }
