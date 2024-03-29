import React from 'react'
import s from './Contact.module.scss';
import {ContactBlock} from "./contactBlock/ContactBlock";


export const Contact = () => {
    const dataForContactBlock = [
        {title: 'Phone', data: '+375-29-506-40-04', a: 'tel:+375-29-506-40-04'},
        {title: 'Email', data: 'yakubyshyndzmitry@gmail.com', a: ''},
        {title: 'My Location', data: 'Minsk, Belarus', a: ''},
    ]
    return (
        <div className={s.contact}>
            {dataForContactBlock.map((d, i) =>
                <ContactBlock
                    key={i+d.title}
                    title={d.title}
                    data={d.data}
                    a={d.a}
                />
            )}
        </div>
    )
}