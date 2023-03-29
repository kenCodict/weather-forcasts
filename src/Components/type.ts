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