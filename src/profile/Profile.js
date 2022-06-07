import s from './Profile.module.scss';
import Fade from 'react-reveal/Fade';

export const Profile = () => {
    return (
        <div id='profile' className={s.profile}>
            <h2>ABOUT ME</h2>
            <Fade bottom>
                <p className={s.text}>
                    I'm a front-end developer with experience in creating
                    SPA using React, Redux, TypeScript, JavaScript, CSS,
                    HTML. Learning is my passion. I'm continuously
                    improving my English, studying new technologies and
                    solving tasks on Codewars in my spare time. Also, my
                    strengths are great analytical skills, responsibility and
                    stress resistance. Ready to consider project work and
                    full-time employment.
                </p>
            </Fade>
        </div>
    )
}