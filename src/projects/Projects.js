import s from './Projects.module.css';
import {Project} from './project/Project';
import logo from '../assets/images/git_logo.png'

export const Projects = () => {
    const projects = [
        {title: 'Social Neetwork', description:'adfad',logo,link:''},
        {title: 'Todolist', description:'sfffffffff',logo,link:''},
        {title: 'Cards', description:'rrrrrrrrrrrrrrrrr',logo,link:'https://dallmad.github.io/my_friday/'}
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
                            link={p.link}
                            key={p + i}/>
                )}
            </div>
        </div>
    );
}