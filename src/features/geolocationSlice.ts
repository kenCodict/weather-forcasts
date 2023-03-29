import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from "../store";
import type { location } from "../Components/type";
import axios from 'axios';
import { fetchData } from "../Components/fetchData";

export const fetchGeolocation = createAsyncThunk('geolocation/fetchGeolocation', async(loc:string) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=${5}&appid=${`903e962f7f696141c434bbb39a9620c6`}`
    const data = await fetchData(url)
    return data
})
interface stateType {
    term:string,
    options:[],
    selectedOption: ([number, number] | []),
    Loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: unknown
}
const initialState: stateType = {
term : '',
options: [],
selectedOption : [],
Loading: 'idle',
error: {},
}

const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    setTerm: (state, action) => {
        state.term = action.payload
    },
    setOptions: (state, action) => {
        state.options = action.payload
    },
    setSelectedOptions: (state, action) => {
        state.selectedOption = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGeolocation.pending, (state, action) => {
        state.Loading = 'pending'
    })
    builder.addCase(fetchGeolocation.fulfilled, (state, action) => {
        state.Loading = 'succeeded'
        state.options = action.payload
    })
    builder.addCase(fetchGeolocation.rejected, (state, action) => {
        state.Loading = 'failed'
        state.error = action.error
    })
  }
});

export const {setTerm,setOptions, setSelectedOptions} = geolocationSlice.actions

export default geolocationSlice.reducer