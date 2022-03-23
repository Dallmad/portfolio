import s from './Nav.module.css';


export const Nav = () => {

    // const pages = [
    //     {title: 'Home', x:0, y:0},
    //     {title: 'About', x:0, y: document.getElementById('asfa')},
    //     {title: 'Skills', x:0, y: 697},
    //     {title: 'Projects', x:0, y: 1343},
    //     {title: 'Contact', x:0, y: 1845},
    //     {title: 'GitHub', x:0, y: 0}
    // ]
    const pages = [
        {id: 'main',title: 'Home'},
        {id: 'profile',title: 'About'},
        {id: 'skills',title: 'Skills'},
        {id: 'projects',title: 'Projects'},
        {id: 'contacts',title: 'Contact'},
        {id: 'main',title: 'GitHub'}
    ]
    const onClickHandler = (id) => document.
    getElementById(id).
    scrollIntoView({block: "start",behavior: 'smooth'})

    return (
        <div className={s.nav}>
            {pages.map( p => <div
                title={'text'}
                className={s.div}
                onClick={()=>onClickHandler(p.id)}
            >{p.title}</div>)}
        </div>
    )
}