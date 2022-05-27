import s from './Projects.module.css';
import {Project} from "./project/Project";
import logo from '../assets/images/git_logo.png'

export const Projects = () => {
    const projects = [
        {title: 'Social Neetwork', description:'adfad',logo},
        {title: 'Todolist', description:'sfffffffff',logo},
        {title: 'Cards', description:'rrrrrrrrrrrrrrrrr',logo}
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
                            key={p + i}/>
                )}
            </div>
        </div>
    );
}