import React from "react";
import { mainPropsType, locationOptions} from "./type";
export function Search({
  term,
  handleOnchange,
  options,
  fetchWeather,
  search
}: mainPropsType) {
  return <section className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-lg w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]">
         <h1 className="font-thin text-4xl ">Weather <span className="font-black">Forcast</span></h1>
         <p className="text-sm ">Enter below the place you want to know the wheather of and select an option from the drop down</p>
         <div className="flex justify-center items-center mt-10 md:mt-4 relative">
         <input type="text" className="px-2 py-1 rounded-l-md border-2 border-zinc-100 focus:outline-slate-200" value={term} onChange={handleOnchange} />

       {options.length > 0 && <ul className="absolute top-[36px] rounded-t-md left-0 flex items-start flex-col py-4 px-2 bg-white w-[201px]">
        {options.map((option: locationOptions, index: number) => {
          const {
            name,
            lon,
            lat
          } = option;
          return <li className="w-full text-left" key={option.name + index}>
          <button className="hover:bg-black hover:text-white duration-700 block p-2 w-full text-left" onClick={() => fetchWeather(lon, lat, name)}>{`${option.name} (${option.country})`}</button>
          </li>;
        })}
        </ul>}
         <button className="rounded-r-md border-2 border-zink-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer" onClick={search}>search</button>
         </div>
        </section>;
}
  