import React, {useState} from 'react';
import CreateUser from './CreateUser';
import WelcomeScreen from './WelcomeScreen';
import styles from './LandingPage.css';

const LandingPage = ({ handleActive, currentUser }) => {
    
    const handleNewGame = () => {
        setDisplayScreen(<CreateUser
            handleActive={handleActive}
            currentUser={currentUser}  />);
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
