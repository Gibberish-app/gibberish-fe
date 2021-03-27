import React, {useState} from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from '../components/player/Player';
import GameInfo from '../components/info/GameInfo';
import Header from '../components/header/Header';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [bag, setBag] = useState(0)

    const handleActive = () => {
        setActive(true);
    };

    console.log(bag);

    return (
        <div>
            {active ?
            <div>
                <Header />
                <Board />
                <GameInfo 
                    currentUser={currentUser}
                    bag={bag} />
                <Player setBag={setBag}/>
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
