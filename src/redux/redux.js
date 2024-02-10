import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./actions/sites";

const store = configureStore({
    reducer : {
        Sites : siteReducer
    }
});

export default store;