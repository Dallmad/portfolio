import s from './Main.module.scss';
import foto from '../assets/images/foto.jpg'
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

export const Main = () => {
    return (
        <div id='main' className={s.main}>
            <Fade bottom>
                <div className={s.containerForTitle}>
                    <span>Welcome</span>
                    <div>
                        <span className={s.span_secondLine}>I'm</span>
                        <span className={s.title}>Dzmitry Yakubyshyn</span>
                    </div>
                </div>
                <Tilt options={{
                    max: 45,

                }}>
                    <div>
                        <img className={s.img} src={foto} alt={'my photo'}/>
                    </div>
                </Tilt>
            </Fade>
        </div>
    );
}