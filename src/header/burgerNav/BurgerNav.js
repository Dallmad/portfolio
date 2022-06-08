import s from './BurgerNav.module.scss';
import {useState} from "react";
import burgerIcon from '../../assets/images/icon_burger.svg'


export const BurgerNav = () => {

    const [menuIsOpen,setMenuIsOpen] = useState(false)

    const onBurgerClick = () => {
      setMenuIsOpen(!menuIsOpen)
    }

    const pages = [
        {id: 'main', title: 'Home'},
        {id: 'profile', title: 'About'},
        {id: 'skills', title: 'Skills'},
        {id: 'projects', title: 'Projects'},
        {id: 'contacts', title: 'Contact'},
    ]
    const onClickHandler = (id) => {
        document.getElementById(id).scrollIntoView({block: "start", behavior: 'smooth'})
        setMenuIsOpen(false)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems}${s.show}` : s.burgerNavItems}>
                {pages.map(p => <p
                    title={'text'}
                    className={s.div}
                    onClick={() => onClickHandler(p.id)}
                    key={p.id}
                >{p.title}</p>)}
            </div>
            <img src={burgerIcon} className={s.burgerButton} onClick={onBurgerClick}/>
        </div>
    )
}