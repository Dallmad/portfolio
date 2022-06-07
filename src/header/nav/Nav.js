import s from './Nav.module.scss';


export const Nav = () => {

    const pages = [
        {id: 'main',title: 'Home'},
        {id: 'profile',title: 'About'},
        {id: 'skills',title: 'Skills'},
        {id: 'projects',title: 'Projects'},
        {id: 'contacts',title: 'Contact'},
    ]
    const onClickHandler = (id) => document.
    getElementById(id).scrollIntoView({block: "start",behavior: 'smooth'})

    return (
        <div className={s.nav}>
            {pages.map( p => <h2
                title={'text'}
                className={s.div}
                onClick={()=>onClickHandler(p.id)}
                key={p.id}
            >{p.title}</h2>)}
        </div>
    )
}