import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'


type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>20°</div>
          <div className={s.this_day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>Time: <span>21:34</span></div>
        <div className={s.this_city}>Time: <span>St. Petersburg</span></div>
      </div>
    </div>
  )
}

export default ThisDay