import React from 'react'
import styles from './LandingPage.css'

const WelcomeScreen = ({ handleNewGame }) => {

    return (
        <div>
            <h1>Gibberish</h1>
            <button className={styles.newButton} onClick={handleNewGame}>New Game</button>
        </div>
    )
}

export default WelcomeScreen
