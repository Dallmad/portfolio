import s from './Educations.module.scss'
import {Education} from './education/Education'
import {v1} from 'uuid'
import Fade from 'react-reveal/Fade'

export const Educations = () => {

    const educations = [
        {id: v1(), title: 'BNTU', year: '2005-2010', description: 'Engineer-electrician'},
        {
            id: v1(),
            title: 'IT-INCUBATOR',
            year: '2021-2022',
            description: 'Frontend developer (React / Redux / JS / TS)'
        },
    ]
    return (
        <div className={s.educations}>
            <h2>EDUCATION</h2>
            <Fade bottom>
                <div className={s.educationsContainer}>
                    {educations.map(e =>
                        <Education
                            key={e.id}
                            title={e.title}
                            year={e.year}
                            description={e.description}
                        />
                    )}
                </div>
            </Fade>
        </div>
    )
}