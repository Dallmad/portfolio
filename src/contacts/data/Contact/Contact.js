import React from 'react'
import s from './Contact.module.css';
import {ContactBlock} from "./contactBlock/ContactBlock";



export const Contact = () => {
    return (
        <div className={s.contact}>
            <ContactBlock title={'Phone'} data={'+375-29-506-40-04'} a={"tel:+375-29-506-40-04"}/>
            <ContactBlock title={'Email'} data={'maddal.privod@gmail.com'} a={""}/>
            <ContactBlock title={'My Location'} data={'Minsk, Belarus'} a={""}/>
        </div>
    )
}