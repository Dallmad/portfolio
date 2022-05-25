import s from './Skills.module.css';
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import html from '../assets/images/html5_logo.png'
import css from '../assets/images/css3_logo.png'
import js from '../assets/images/JS_logo.png'
import ts from '../assets/images/TS_logo.jpg'
import react from '../assets/images/react_logo.png'
import redux from '../assets/images/redux_logo.png'
import git from '../assets/images/git_logo.png'
import sass from '../assets/images/sass_logo.png'
import postman from '../assets/images/postman_logo.png'

export const Skills = () => {

    const skills = [
        {id:v1(),title:'HTML',img:html},
        {id:v1(),title:'CSS',img:css},
        {id:v1(),title:'JavaScript',img:js},
        {id:v1(),title:'TypeScript',img:ts},
        {id:v1(),title:'React',img:react},
        {id:v1(),title:'Redux',img:redux},
        {id:v1(),title:'Git',img:git},
        {id:v1(),title:'SASS',img:sass},
        {id:v1(),title:'Postman',img:postman},
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