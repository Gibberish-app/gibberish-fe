import React, { useState } from 'react';
import CreateUser from './CreateUser';
import WelcomeScreen from './WelcomeScreen';
import styles from './LandingPage.css';
import Lobby from './Lobby';
import Header from '../../components/header/Header';

const LandingPage = ({ handleActive, currentUser, handleCurrentGame, toggleWaiting, currentGame }) => {

    const handleEnterLobby = (user) => {
        setDisplayScreen(<Lobby
            handleActive={handleActive}
            currentUser={user}
            currentGame={currentGame}
            handleCurrentGame={handleCurrentGame}
            toggleWaiting={toggleWaiting}
        />);
    }

    const handleNewGame = () => {
        setDisplayScreen(<CreateUser
            handleEnterLobby={handleEnterLobby}
            currentUser={currentUser} />);
    }

    const [displayScreen, setDisplayScreen] = useState(<WelcomeScreen
        handleNewGame={handleNewGame}
    />)

    return (
        <div className={styles.landing}>
            {displayScreen}
        </div>
    )
}

export default LandingPage;
