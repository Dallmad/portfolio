import s from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projects}>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    );
}