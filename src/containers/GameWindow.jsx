import React, {useState, useRef} from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from './Player';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const currentUser = useRef({});

    const handleActive = () => {
        setActive(true);
    };

    return (
        <div>
            {active ?
            <div>
                <Board />
                <Player />
            </div>
            :
            <LandingPage
                handleActive={handleActive}
                currentUser={currentUser}
            />
            }
        </div>
    )
}

export default GameWindow
