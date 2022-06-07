import s from './Projects.module.scss'
import {Project} from './project/Project'
import logoTodolist from '../assets/images/logo_todo.png'
import socialNetwork from '../assets/images/logo_social_network.jpg'
import logoCards from '../assets/images/logo_cards.jpg'
import Fade from 'react-reveal/Fade'

export const Projects = () => {
    const projects = [
        {
            title: 'Social Neetwork',
            description: 'SPA for social actions - messaging and blogging.',
            logo: socialNetwork,
            linkToGHPage: 'https://dallmad.github.io/social_network_samurai/',
            linkToCode: 'https://github.com/Dallmad/social_network_samurai'
        },
        {
            title: 'Todolist',
            description: 'SPA for managing to-do lists and their items.',
            logo: logoTodolist,
            linkToGHPage: 'https://dallmad.github.io/my_todo/',
            linkToCode: 'https://github.com/Dallmad/it-incubator-todolist'
        },
        {
            title: 'Cards',
            description: 'SPA for learning by cards.',
            logo: logoCards,
            linkToGHPage: 'https://dallmad.github.io/my_friday/',
            linkToCode: 'https://github.com/Dallmad/my_friday'
        }
    ]

    return (

        <div id='projects' className={s.projects}>
            <h2>PROJECTS</h2>
            <Fade bottom>
                <div className={s.block}>
                    {projects.map((p, i) =>
                        <Project
                            title={p.title}
                            description={p.description}
                            logo={p.logo}
                            linkToGHPage={p.linkToGHPage}
                            linkToCode={p.linkToCode}
                            key={p + i}/>
                    )}
                </div>
            </Fade>
        </div>

    )
}