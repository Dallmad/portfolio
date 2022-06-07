
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
}