import { configureStore } from "@reduxjs/toolkit";
import geolocationReducer from "./features/geolocationSlice";
import weatherReducer from "./features/weatherSlice";
export const store = configureStore({
    reducer: {
        geolocation:geolocationReducer,
        weather: weatherReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch