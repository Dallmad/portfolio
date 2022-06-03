import s from './Skills.module.css';
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import html from '../assets/images/logo_html5.png'
import css from '../assets/images/logo_css3.png'
import js from '../assets/images/logo_JS.png'
import ts from '../assets/images/logo_TS.jpg'
import react from '../assets/images/logo_react.png'
import redux from '../assets/images/logo_redux.png'
import git from '../assets/images/logo_git.png'
import sass from '../assets/images/logo_sass.png'
import postman from '../assets/images/logo_postman.png'

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