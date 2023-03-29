import React from 'react'
import Feels from './Icons/Feels'
import Wind from './Icons/Wind'
import Humidity from './Icons/Humidity'
import Visibility from './Icons/Visibility'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'
type Props = {
    icon: 'wind' | 'feels'|'humidity' | 'visibility'| 'pressure'|'pop',
    title:string,
    info:string | JSX.Element,
    description:string,

}
const icons = {
    wind: <Wind />,
    feels: <Feels />,
    humidity: <Humidity />,
    visibility: <Visibility />,
    pressure: <Pressure />,
    pop: <Pop />,
}
const Tile = ({
    icon,
    title,
    info,
    description
}:Props) : JSX.Element => {
    const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[105px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-2 mb-5">
        <div className="flex items-center text-sm font-bold gap-1">
            {Icon} <h4 className=""> {title} </h4>
        </div>
        <h3 className="mt-2 text-lg">{info}</h3>
        <p className="text-xs font-bold text-center">{description}</p>
    </article>
  )
}

export default Tile