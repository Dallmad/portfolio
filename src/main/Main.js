import s from './Main.module.scss';
import foto from '../assets/images/foto.jpg'

export const Main = () => {
    return (
        <div id='main' className={s.main}>
            <div className={s.containerForTitle}>
                <span>Welcome</span>
                <div>
                    <span className={s.span_secondLine}>I'm</span>
                    <span className={s.title}>Dzmitry Yakubyshyn</span>
                </div>
            </div>
            <div>
                <img className={s.img} src={foto} alt={'my photo'}/>
            </div>
        </div>
    );
}