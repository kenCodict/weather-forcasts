import { ArrowFunction } from "typescript"
import { ChangeEvent } from "react";

export type locationOptions = {name:string,lat:number,lon:number,state:string, country:string}
export type mainPropsType = {
    term:string,
    handleOnchange:(e: ChangeEvent<HTMLInputElement>) => void,
    options:[],
    fetchWeather:(lon:number, lat:number, name:string) => void,
    search:() => void,
  }
  export type location = [number,number]

  export type forcastType= {
    name: string,
    country: string,
    sunrise: number,
    sunset:number,
    list: [{
        dt:number,
        main:{
            feels_like: number,
            humidity: number,
            pressure:number,
            temp:number,
            temp_max: number,
            temp_min: number
        },
        weather : [{
            main:string,
            icon:string,
            description:string
        }],
        wind: {
            speed: number,
            gust:number,
            deg:number
        },
        clouds:{
            all:number
        },
        pop:number,
        visibility:number
    }]
  }