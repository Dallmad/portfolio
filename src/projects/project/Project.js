import s from './Project.module.css';

export const Project = ({title, description,logo}) => {
    return (
        <div className={s.project}>
            <img src={logo} alt={'project logo'} className={s.logo}/>
            <h3 className={s.title}>
                {title}
            </h3>
            <div>
                {description}
            </div>
        </div>

    );
}