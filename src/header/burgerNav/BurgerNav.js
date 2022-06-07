import s from './BurgerNav.module.scss';
import {useState} from "react";


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
    const onClickHandler = (id) => document.getElementById(id).scrollIntoView({block: "start", behavior: 'smooth'})

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems}${s.show}` : s.burgerNavItems}>
                {pages.map(p => <h2
                    title={'text'}
                    className={s.div}
                    onClick={() => onClickHandler(p.id)}
                    key={p.id}
                >{p.title}</h2>)}
            </div>
            <div className={s.burgerButton} onClick={onBurgerClick}>BB</div>
        </div>
    )
}