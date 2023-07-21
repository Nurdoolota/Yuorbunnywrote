import logo from './logo.svg'
import './App.scss'
import ProfileGamer from './components/ProfileGamer/ProfileGamer'
import Tourney from './components/Tourney/Tourney'
import TourneyMonth from './components/TourneyMonth/TourneyMonth'


function App() {
    return (
        <div className="App">
            <div className='aboutgame__wrapper'>
                <ProfileGamer />
                <Tourney />
                <TourneyMonth/>
                <ProfileGamer />
            </div>
            <div className='hahaha'>
                
            </div>
        </div>
    )
}

export default App
