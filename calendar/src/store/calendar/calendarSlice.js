// import { createSlice } from "@reduxjs/toolkit";

// export const calendarSlice = createSlice({

//     name:'calendar',
//     initialState: {
//         counter:10
//     },
//     reducers:{
//         increment: (state,) => {
//             state.counter += 1;
//         },
//     }
// }); 

// export const { increment }= calendarSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const tempEvent = {
     _id: new Date ().getTime(), 
      title: 'agregar paciente',
      notes: 'datos del paciente',
      start:  new Date(),
      end: addHours(new Date(), 2),
      bgColor:'#fafafa',
      user: {
           _id: '123',
           name: 'Nataly'
      }
    };

    export const calendarSlice = createSlice({
     name:'calendar',
     initialState: {
     events: [ 
      tempEvent 
    ],
     activeEvent: null
     },
     reducers:{
         onSetActiveEvent: (state, { payload } ) => {
            state.activeEvent = payload;
    },
   
           onAddNewEvent: ( state, { payload } ) => {
             state.events.push( payload) ;
             state.activeEvent = null;
    }
  }
 });

export const { onSetActiveEvent, onAddNewEvent }= calendarSlice.actions;
export default calendarSlice.reducer;