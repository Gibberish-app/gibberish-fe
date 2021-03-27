import React from 'react';
import styles from './LandingPage.css';

const RadioButton = ({ icon, avatarChecked, handleAvatarChange }) => {

    return (
        <label>
            <input
                className={styles.radioButton}
                name={'icon'}
                type='radio'
                value={icon}
                checked={icon === avatarChecked}
                onChange={() => handleAvatarChange(icon)}
                required
            />
            <img className={styles.icons} src={`/avatars/${icon}.png`} />
        </label>
    )
}

export default RadioButton
