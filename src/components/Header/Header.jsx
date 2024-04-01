import React from 'react'
import s from './Header.module.css'
import logo from '../../img/Logo.svg'
import burger from '../../img/burger.svg'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt='web'/>
      </div>
        <div className={s.headerInfo}>
          <p>+7-999-999-999</p>
          <button>Забронировать</button>
          <img src={burger} alt='web'/>
        </div>
    </div>
  )
}

export default Header