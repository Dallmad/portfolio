import s from './Project.module.css';

export const Project = ({title, description,logo}) => {

    const logoHandler = () => {
      alert('hello, it is '+title)
    }

    return (
        <div className={s.project}>
            <div className={s.logo_wrapper}>
                <img src={logo} alt={'project logo'} className={s.logo} onClick={logoHandler}/>
            </div>
            <h3 className={s.title}>
                {title}
            </h3>
            <div className={s.description}>
                {description}
            </div>
        </div>

    );
}