import s from './Projects.module.css';
import {Project} from './project/Project';
import logo from '../assets/images/git_logo.png'

export const Projects = () => {
    const projects = [
        {title: 'Social Neetwork', description:'SPA for social actions - messaging and blogging.',logo,linkToGHPage:'https://dallmad.github.io/social_network_samurai/', linkToCode:'https://github.com/Dallmad/social_network_samurai'},
        {title: 'Todolist', description:'SPA for managing to-do lists and their items.',logo,linkToGHPage:'',linkToCode:'https://github.com/Dallmad/it-incubator-todolist'},
        {title: 'Cards', description:'SPA for learning by cards.',logo,linkToGHPage:'https://dallmad.github.io/my_friday/',linkToCode:'https://github.com/Dallmad/my_friday'}
    ]

    return (
        <div id='projects' className={s.projects}>
            <h2>PROJECTS</h2>
            <div className={ s.block}>
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
        </div>
    );
}