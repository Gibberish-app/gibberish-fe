import React, { useState, useEffect } from 'react';
import RadioButton from './RadioButton';
import styles from './LandingPage.css';
import { socket } from '../../utils/socket/socket'

const avatars = ['shuttle', 'alien', 'meteor', 'astronaut', 'planets', 'saturn']

const CreateUser = ({ setCurrentUser, handleEnterLobby }) => {
    const [name, setName] = useState('');
    const [avatarChecked, setAvatarChecked] = useState('shuttle');
    // const [user, setCurrentUser] = useState(currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault();

        socket.emit("CREATE_USER", ({
            userName: name,
            avatar: avatarChecked
        }));
    }

    useEffect(() => {
        socket.on("USER_CREATED", user => {
            setCurrentUser(user);
            handleEnterLobby(user)
        })
    }, [socket])

    const handleAvatarChange = (avatarChecked) => {
        setAvatarChecked(avatarChecked)
    }

    return (
        <div className={styles.create}>
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
                <button className={styles.submit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser;
