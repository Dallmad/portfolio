import s from './Skills.module.css';
import {Skill} from "./skill/Skill";
import {v1} from "uuid";

export const Skills = () => {

    const skills = [
        {id:v1(),title:'HTML',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'CSS',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'JavaScript',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'TypeScript',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'React',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'Redux',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'Git',img:'https://ksim.ru/img/empty-square.png'},
        {id:v1(),title:'SASS',img:'https://ksim.ru/img/empty-square.png'},
    ]

    return (

        <div id='skills' className={s.skills}>
            <h2 className={s.title}>SKILLS</h2>
            <div className={s.skillsContainer}>
                {skills.map( s => <Skill key={s.id} title={s.title} img={s.img}/>)}
            </div>
        </div>

    );
}