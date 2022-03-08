import s from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div id='projects' className={s.projects}>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    );
}