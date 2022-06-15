import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'
import {Weather} from '../../../../store/types/types'


interface Props  {
  weather: Weather;
}



const ThisDay = ({weather}: Props) => {


  function curTime(): any{
    const d =new Date(weather.dt*1000);
    return d.toLocaleTimeString().slice(0,-3)
  
    
  }

  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this_day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={s.bottom_block}>
        {/* <div className={s.this_time}>Time: <span>{weather.dt}</span></div> */}
        <div className={s.this_time}>Time: <span>{curTime().toString()}</span></div>
        <div className={s.this_city}>City: <span>St. Petersburg</span></div>
      </div>
    </div>
  )
}

export default ThisDay