import s from './Nav.module.css';


export const Nav = () => {

    return (
        <div className={s.nav}>

            <a href={'#main'}>Home</a>
            <a href={'#profile'}>About</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#projects'}>Projects</a>
            <a href={'#contacts'}>Contact</a>
            <a href=''>GitHub</a>
        </div>
    )
}