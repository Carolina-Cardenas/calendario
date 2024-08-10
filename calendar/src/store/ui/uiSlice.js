import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen:true
    },
    reducers:{
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true
        },
        oncloseDateModal: (state) => {
            state.isDateModalOpen = false;
        }
    }
})

export const {onOpenDateModal, oncloseDateModal} =uiSlice.actions