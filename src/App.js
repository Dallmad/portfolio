import s from './App.module.scss'
import {Header} from "./header/Header"
import {Profile} from "./profile/Profile"
import {Skills} from "./skills/Skills"
import {Educations} from "./educations/Educations"
import {Projects} from "./projects/Projects"
import {Contacts} from "./contacts/Contacts"
import {Main} from "./main/Main"
import {Footer} from "./footer/Footer"

export const App = () => {
    return (
        <div className={s.app}>
            <div className={s.generalPageContainer}>
                <Header/>
                <Main/>
            </div>
            <div className={s.container}>
                <Profile/>
                <Skills/>
                <Educations/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    )
}
