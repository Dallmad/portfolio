import s from './ContactBlock.module.css';

export const ContactBlock = ({title, data, a}) => {
    return (
        <div className={s.contactBlock}>
            <div className={s.block}>
                <h4>{title}</h4>
                <a href={a} className={s.link}>{data}</a>
            </div>
        </div>
    )
}
