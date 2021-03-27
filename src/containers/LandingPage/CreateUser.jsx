import React, {useState} from 'react';
import RadioButton from './RadioButton';

const avatars = ['shuttle', 'alien', 'meteor', 'astronaut', 'planets', 'saturn']

const CreateUser = ({ currentUser, handleActive }) => {
    const [name, setName] = useState('');
    const [avatarChecked, setAvatarChecked] = useState('shuttle');
    const [user, setCurrentUser] = useState(currentUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentUser({
            name: name,
            avatar: avatarChecked
        })
        handleActive()
    }

    const handleAvatarChange = (icon) => {
        setAvatarChecked(icon)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input
                    type="text"
                    maxLength="16"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                />
                <p>Avatar:</p>
                <div>
                    {avatars.map(icon => {
                        return <RadioButton
                            key={icon}
                            icon={icon}
                            handleAvatarChange={handleAvatarChange}
                            avatarChecked={avatarChecked}
                            />
                    })}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser
