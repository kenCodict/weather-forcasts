import { Search } from './Search';
import React from "react";
import { mainPropsType } from "./type";
import { locationOptions } from "./type";
import { useAppDispatch,  useAppSelector} from "../hook";
export function Main({
    
  term,
  handleOnchange,
  options,
  fetchWeather,
  search
}:mainPropsType) {
    const {weatherForcast} = useAppSelector(state=> state.weather)
  return <main className="flex justify-center items-center bg-gradient-to-br from-sky-200 via-rose-200 to-lime-200 w-full h-screen">
       {Object.keys(weatherForcast).length <= 0 ? <Search   term={term} handleOnchange={handleOnchange} options={options}  fetchWeather={fetchWeather}  search={search}  />
       : <p>Selected</p>
    }
      </main>;
}
  