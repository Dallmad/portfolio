import s from './Contacts.module.css';
import {Data} from "./data/Data/Data";
import {Contact} from "./data/Contact/Contact";

export const Contacts = () => {
    return (
        <div id='contacts' className={s.contacts}>
            <div className={s.block}>
                <h2 className={s.title}>CONTACT</h2>
                <div className={s.data}>
                    <Contact/>
                    <Data/>
                </div>
            </div>
        </div>
    );
}