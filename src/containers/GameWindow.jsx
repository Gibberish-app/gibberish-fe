import React, {useState, useRef} from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from '../components/player/Player';
import GameInfo from '../components/info/GameInfo';
import Header from '../components/header/Header';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    const handleActive = () => {
        setActive(true);
    };

    return (
        <div>
            {active ?
            <div>
                <Header />
                <Board />
                <GameInfo currentUser={currentUser} />
                <Player />
            </div>
            :
            <LandingPage
                handleActive={handleActive}
                setCurrentUser={setCurrentUser}
            />
            }
        </div>
    )
}

export default GameWindow
