import { Search } from './Search';
import React from "react";
import { mainPropsType } from "./type";
import { locationOptions } from "./type";
import { useAppDispatch,  useAppSelector} from "../hook";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import ForcastWeather from './ForcastWeather';
import { setWeatherForcast } from '@/features/weatherSlice';
export function Main({
  term,
  handleOnchange,
  options,
  fetchWeather,
  search
}:mainPropsType) {
  const dispatch = useAppDispatch()
    const {weatherForcast,Loading} = useAppSelector(state=> state.weather)
  return <main className="flex justify-center items-center bg-gradient-to-br from-sky-200 via-rose-200 to-lime-200 w-full min-h-screen">
    {weatherForcast && (
      <div className="fixed w-fit p-4 bg-gray-900 top-10 right-10 animate-bounce rounded-lg">
        <button className="text-white font-bold text-xl flex gap-2 items-center" onClick={() => dispatch(setWeatherForcast(null))}>Back <FaArrowRight /> </button>
      </div>
    )}
       {Loading === 'pending' ? (
        <div className="flex  items-center justify-center h-screen fixed w-full bg-gray-500 bg-opacity-50">
          <h1 className="text-xl lg:text-4xl md:text-2xl font-bold animate-bounce bg-zinc-900 text-white rounded-lg py-5 text-center px-4">Fetching Data...</h1>
        </div>
       ) : !weatherForcast ? <Search   term={term} handleOnchange={handleOnchange} options={options}  fetchWeather={fetchWeather}  search={search}  />
       : <ForcastWeather weatherForcast={weatherForcast}/>
    }
      </main>;
}
  