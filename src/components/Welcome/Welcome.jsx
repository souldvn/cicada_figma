import React from 'react'
import s from './Welcome.module.css'
import mainpic from '../../img/mainimg.svg'

const Welcome = () => {
  return (
    <div className={s.welcome}>
        <div className={s.main}>
            <p className={s.title}>Figma с нуля <br/> до PRO</p>
            <div className={s.desc}>
                Освойте самую популярную программу для дизайнеров на профессиональном уровне. Научитесь создавать интерактивные прототипы, дизайн-макеты, экономить свое и чужое время 
            </div>
            <button>Записаться на курс</button>
        </div>
        <div className={s.pic}>
            <img className={s.mainpic} src={mainpic} alt='web'/>
            <p>Авторский курс от CICADA ACADEMY</p>
        </div>
    </div>
  )
}

export default Welcome