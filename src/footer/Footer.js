import s from './Footer.module.scss'
import git from '../assets/images/logo_git.png'
import linkedIn from '../assets/images/logo_linkedIn.png'
import telegram from '../assets/images/logo_telegram.png'
import Fade from 'react-reveal/Fade'

export const Footer = () => {

    const footerContainer = [
        {name: 'linkedIn', logo: linkedIn, link: 'https://www.linkedin.com/in/dzmitry-yakubyshyn-432267235/'},
        {name: 'gitHub', logo: git, link: 'https://github.com/Dallmad'},
        {name: 'telegram', logo: telegram, link: 'https://t.me/dallmad'},
    ]

    const logoHandler = (link) => {
        window.open(link)
    }

    return (
        <>
            <Fade bottom>
                <div className={s.container}>
                    {footerContainer.map((f, i) =>
                        <div key={f + i}>
                            <img src={f.logo} onClick={() => logoHandler(f.link)} className={s.logo}/>
                        </div>
                    )}
                </div>
                <div className={s.text}>
                    © 2022 All Rights Reserved.
                </div>
            </Fade>
        </>
    )
}