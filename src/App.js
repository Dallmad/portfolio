import './App.scss';
import {Header} from "./header/Header";
import {Profile} from "./profile/Profile";
import {Skills} from "./skills/Skills";
import {Educations} from "./educations/Educations";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";



function App() {
    return (
        <div className='App'>
            <div className='generalPageContainer'>
                <Header/>
                <Main/>
            </div>
            <div className='container'>
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

export default App;