import React from 'react'
import styles from './LandingPage.css'

const WelcomeScreen = ({ handleNewGame }) => {

    return (
        <div>
            <h1>Gibberish</h1>
            <h2>Where the words are made up and the points definitely matter.</h2>
            <button className={styles.newButton} onClick={handleNewGame}>New Game</button>
        </div>
    )
}

export default WelcomeScreen
