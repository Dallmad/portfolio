import s from './Education.module.css';

export const Education = (props) => {
    return (
        <div className={s.education}>

            <div className={s.title}>
                {props.title+' '+props.year+' :'}
            </div>
            <div className={s.description}>
                {props.description}
            </div>
        </div>
    );
}