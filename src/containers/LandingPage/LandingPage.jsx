import React, {useState} from 'react';
import CreateUser from './CreateUser';
import WelcomeScreen from './WelcomeScreen';

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
        <div>
            {displayScreen}
        </div>
    )
}

export default LandingPage;
