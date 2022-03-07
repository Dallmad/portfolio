import s from './Skills.module.css';
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    );
}