import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contact</a>
            <a href=''>GitHub</a>
        </div>
    )
}