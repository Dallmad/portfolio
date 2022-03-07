import s from './Main.module.css';

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.containerForTitle}>
                <span className={s.span}>Welcome</span>
                <h1 className={s.title}>I'm Dzmitry Yakubyshyn</h1>
            </div>
            <div>
                <img className={s.img} src={'https://ksim.ru/img/empty-square.png'} alt={'my photo'}/>
            </div>
        </div>
    );
}