import React from 'react';

const RadioButton = ({ icon, avatarChecked, handleAvatarChecked }) => {
    return (
        <label>
            <input
                name={'icon'}
                type='radio'
                value={icon}
                checked={icon === avatarChecked}
                onChange={() => handleAvatarChecked(icon)}
                required
            />
            <img src={`/avatars/${icon}.png`} />
        </label>
    )
}

export default RadioButton
