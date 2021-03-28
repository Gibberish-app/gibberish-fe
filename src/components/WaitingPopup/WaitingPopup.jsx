import React from 'react';
import styles from './waiting.css';

export default function WaitingPopup(width) {
    return (
        <div 
            className={styles.waiting}
            style={{ 
            width: width.width }}>
            <p>WAITING...</p>
        </div>
    )
}