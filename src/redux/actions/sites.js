import { createSlice } from "@reduxjs/toolkit";

const addSitesAction = createSlice({
    name : "siteList",
    initialState : {
        data: []
    },
    reducers : {
        addSites : (state, action) => {
            state.data = action.payload;
        }
    }
});

export const {addSites} = addSitesAction.actions;

export default addSitesAction.reducer;