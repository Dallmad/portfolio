
import s from './Footer.module.css';
import git from '../assets/images/logo_git.png'
import linkedIn from '../assets/images/logo_linkedIn.png'
import telegram from '../assets/images/logo_telegram.png'

export const Footer = () => {

    const footerContainer = [
        {name:'linkedIn', logo: linkedIn, link:'https://www.linkedin.com/in/dzmitry-yakubyshyn-432267235/'},
        {name:'gitHub', logo: git, link:'https://github.com/Dallmad'},
        {name:'telegram', logo: telegram, link:'https://github.com/Dallmad'},
    ]

    const logoHandler = (link) => {
        window.open(link)
    }

    return (
        <>
            <div className={s.container}>
                {footerContainer.map( (f, i) =>
                    <div key={f+i} className={s.logo_wrapper}>
                        <img src={f.logo}  onClick={()=>logoHandler(f.link)} className={s.logo}/>
                    </div>
                )}
            </div>
            <div className={s.text}>
                © 2022 All Rights Reserved.
            </div>
        </>

    );
}