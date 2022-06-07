import s from './Skill.module.scss';

export const Skill = ({img, title}) => {
    return (
        <div className={s.skillContainer}>
            <div>
                <img className={s.img} src={img} alt={'skill picture'}/>
            </div>
            <div className={s.title}>
                <p>{title}</p>
            </div>
        </div>
    );
}