import s from './Main.module.css';
import foto from '../assets/images/99.jpg'

export const Main = () => {
    return (
        <div id='main' className={s.main}>
            <div className={s.containerForTitle}>
                <span className={s.span}>Welcome</span>
                <>
                    <span className={s.span_secondLine}>I'm</span>
                    <p className={s.title}>Dzmitry Yakubyshyn</p>
                </>
            </div>
            <div>
                <img className={s.img} src={foto} alt={'my photo'}/>
            </div>
        </div>
    );
}