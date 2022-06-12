import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import s from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
  const themeObj = useTheme();
  const options = [
    { value: 'city-1', label: 'St. Petersburg' },
    { value: 'city-2', label: 'Moscow' },
    { value: 'city-3', label: 'Novgorod' }
  ]


  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: themeObj.theme === Theme.DARK ?'#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,

    }),
    singleValue: (styles: any) => ({
      ...styles,
      color:  themeObj.theme === Theme.DARK ?'#fff' : '#000',

    }),
  };


  function changeTheme() {
    themeObj.changeTheme(themeObj.theme === Theme.LIGHT ? Theme.DARK  : Theme.LIGHT );
  }

 

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id='header-logo'/>
            </div>
            <div className={s.title}>REACT WEATHER</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                 <GlobalSvgSelector id='change-theme'/>
            </div>
            <Select 
              defaultValue={options[0]} 
              styles={colourStyles} 
              options={options} 
            />
        </div>
    </header>
  )
}

export default Header