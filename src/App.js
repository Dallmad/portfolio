import './App.css';
import {Header} from "./header/Header";
import {Profile} from "./profile/Profile";
import {Skills} from "./skills/Skills";


function App() {
    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <Profile/>
                <Skills/>
            </div>
        </div>
    );
}

export default App;