import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from "../store";
import type { location,forcastType } from "../Components/type";
import axios from 'axios';
import { fetchData } from "../Components/fetchData";



export const fetchWeatherForcast = createAsyncThunk('geolocation/fetchWeatherForcast', async(loc:location) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${loc[1]}&lon=${loc[0]}&units=metric&appid=${`903e962f7f696141c434bbb39a9620c6`}`
    const data = await fetchData(url)
    return data
})

interface stateType {
    weatherForcast:forcastType | null,
    Loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: unknown
}
const initialState: stateType = {
weatherForcast:null,
Loading: 'idle',
error: {},
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherForcast: (state, action) => {
        state.weatherForcast = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForcast.pending, (state, action) => {
        state.Loading = 'pending'
    })
    builder.addCase(fetchWeatherForcast.fulfilled, (state, action) => {
        state.Loading = 'succeeded'
        const data = action.payload
        const forcastData = {
            ...data.city,
            list: data.list.slice(0,16)
        }
        state.weatherForcast = forcastData
    })
    builder.addCase(fetchWeatherForcast.rejected, (state, action) => {
        state.Loading = 'failed'
        state.error = action.error
    })
  }
});

export const {setWeatherForcast} = weatherSlice.actions


export default weatherSlice.reducer