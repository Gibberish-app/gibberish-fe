import React, { useState } from 'react';
import CreateUser from './CreateUser';
import WelcomeScreen from './WelcomeScreen';
import styles from './LandingPage.css';
import Lobby from './Lobby';
import Header from '../../components/header/Header';

const LandingPage = ({ handleActive, setCurrentUser, setCurrentGame }) => {

    const handleEnterLobby = (user) => {
        setDisplayScreen(<Lobby
            handleActive={handleActive}
            setCurrentGame={setCurrentGame}
            currentUser={user}
        />);
    }

    const handleNewGame = () => {
        setDisplayScreen(<CreateUser
            handleEnterLobby={handleEnterLobby}
            setCurrentUser={setCurrentUser} />);
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
