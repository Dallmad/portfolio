import s from './Skill.module.css';

export const Skill = (props) => {
    return (
        <div className={s.skillContainer}>
            <div>
                <img className={s.img} src={props.img} alt={'skill picture'}/>
            </div>
            <div className={s.title}>
                <p>{props.title}</p>
            </div>
        </div>
    );
}