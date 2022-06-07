import s from './Contacts.module.scss'
import {Data} from './data/Data/Data'
import {Contact} from './data/Contact/Contact'
import Fade from 'react-reveal/Fade'

export const Contacts = () => {

    return (
        <div id='contacts' className={s.contacts}>
            <div className={s.block}>
                <h2>CONTACT</h2>
                <Fade bottom>
                    <div className={s.data}>
                        <Contact/>
                        <Data/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}