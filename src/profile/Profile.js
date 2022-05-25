import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div id='profile' className={s.profile}>
            <h2 className={s.title}>ABOUT ME</h2>
            <p className={s.text}>
                I'm a frontend developer with experience in creating SPA using React, Redux, TypeScript, JavaScript,
                CSS, HTML. Learning is my passion. I'm continuously improving my English, studying new technologies and
                solving tasks on Codewars in my spare time. One of my goals is to study Node.js. Also, my strengths are
                great analytical skills, responsibility and stress resistance.
            </p>
        </div>
    )
}