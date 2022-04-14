import React from 'react'
import s from './Data.module.css';


export const Data = () => {
    return (
        <form className={s.data}>
            <div className={s.inputBlock}>
                <input type="text" placeholder="Your Name" className={s.input}/>
                <input type="email" placeholder="Your Email" className={s.input}/>
            </div>
            <textarea placeholder="Your Message" className={s.text}/>
            <button type={'submit'} className={s.button}>
                Send Message
            </button>
        </form>
    )
}
