import s from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div id='projects' className={s.projects}>
            <h2 className={s.title}>PROJECTS</h2>
            <div className={s.block}>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
}