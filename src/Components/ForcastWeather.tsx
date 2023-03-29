import { getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection } from '@/helpers';
import Image from 'next/image';
import React from 'react'
import { useAppDispatch,  useAppSelector} from "../hook";
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import Tile from './Tile';
import { forcastType } from './type';

const Degree = (props:{temp:number}) : JSX.Element => {
  return <span>{props.temp}<sup className="">o</sup></span>
}
const ForcastWeather = (props:{weatherForcast: forcastType}) : JSX.Element => {
   const {weatherForcast} = props
   const {name,list, country,sunrise, sunset} = weatherForcast
   const today = list[0]
   const  {
    dt,
    main:{
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min
    },
    weather : [{
        main,
        icon,
        description
    }],
    wind: {
        speed,
        gust,
        deg
    },
    clouds:{
        all
    },
    pop,
    visibility
} = today
  return (
    <div className="w-full  md:max-w-[500px] py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">{name} 
          <span className="font-thin"> {country} </span>
          </h2>
          <h1 className="text-4xl font-extrabold"><Degree temp={temp}/>C </h1>
          <p className="text-sm">{main} {description}</p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(temp_max)}/>,  L: <Degree temp={Math.floor(temp_min)}/>
          </p>
        </section>
        <section className="flex overflow-auto mt-4 pb-2 mb-5">
          {list.map((item, index) : JSX.Element => {
             const  {
              dt, main:{
                  feels_like,
                  humidity,
                  pressure,
                  temp,
                  temp_max,
                  temp_min
              },
              weather : [{
                  main,
                  icon,
                  description
              }],
              wind: {
                  speed,
                  gust,
                  deg
              },
              clouds:{
                  all
              },
              pop,
              visibility
          } = item
            return (
              <div className="inline-block flex-shrink-0 text-center w-[50px]" key={index}>
                <p className="text-xs  text-center">{index === 0 ? "Now" : new Date(dt * 1000).getHours()}</p>
                <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={`weather-icon-${description}`} className="" />
                <p className="text-sm font-bold">
                  <Degree temp={Math.round(temp)} />
                </p>
              </div>
            )
          })}
        </section>
        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className='mt-2'>{getSunTime(sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset /><span className='mt-2'>{getSunTime(sunset)}</span>
          </div>
    
        <Tile
         icon='wind' 
         title="Wind" 
         info={`${Math.round(speed)}km/hr`} 
         description={`${getWindDirection(Math.round(deg))}, gusts ${gust.toFixed(1)}km/hr`} 
         /> 
        <Tile
         icon='feels' 
         title="Feels-like" 
         info={<Degree temp={Math.round(feels_like)}/>} 
         description={`Feels ${Math.round(feels_like) < Math.round(temp) ? 'colder' : 'warmer'}`} 
         /> 
        <Tile
         icon='humidity' 
         title="Humidity" 
         info={`${Math.round(humidity)}%`} 
         description={getHumidityValue(Math.round(humidity))} 
         /> 
        <Tile
         icon='pop' 
         title="Precipitation" 
         info={`${Math.round(pop * 100)}%`} 
         description={`${getPop(Math.round(pop))}, clouds at ${all}%`} 
         /> 
        <Tile
         icon='pressure' 
         title="Pressure" 
         info={`${Math.round(pressure)}hPa`} 
         description={`${Math.round(pressure) < 1013 ? 'Lower' : 'Higher'} than standard`} 
         /> 
        <Tile
         icon='visibility' 
         title="Visibility" 
         info={`${(visibility / 1000).toFixed(1)}km`} 
         description={getVisibilityValue(visibility)} 
         /> 
        </section>
      </div>
    </div>
  )
}

export default ForcastWeather