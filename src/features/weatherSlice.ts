import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from "../store";
import type { location } from "../Components/type";
import axios from 'axios';
import { fetchData } from "../Components/fetchData";


export const fetchWeatherForcast = createAsyncThunk('geolocation/fetchWeatherForcast', async(loc:location) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${loc[1]}&lon=${loc[0]}&units=metric&appid=${`903e962f7f696141c434bbb39a9620c6`}`
    const data = await fetchData(url)
    return data
})

interface stateType {
    weatherForcast:{},
    Loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: unknown
}
const initialState: stateType = {
weatherForcast: {},
Loading: 'idle',
error: {},
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForcast.pending, (state, action) => {
        state.Loading = 'pending'
    })
    builder.addCase(fetchWeatherForcast.fulfilled, (state, action) => {
        state.Loading = 'succeeded'
        state.weatherForcast = action.payload
    })
    builder.addCase(fetchWeatherForcast.rejected, (state, action) => {
        state.Loading = 'failed'
        state.error = action.error
    })
  }
});

export const {} = weatherSlice.actions


export default weatherSlice.reducer