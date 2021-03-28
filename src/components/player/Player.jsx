import React, { useState, useEffect, useRef, useContext } from 'react';
import Draggable from 'react-draggable';
import bag from './bag';
import styles from './player.css';

export default function Player({ setBag }) {

    const [hand, setHand] = useState([])
    const [draw, setDraw] = useState(7)
    let currentHand = []
    let tilesNeeded = 7

    useEffect(() => {
        for (let i = 0; i < draw; i++) {

            let index = Math.floor(Math.random() * bag.length)
            currentHand.push(bag[index])
            tilesNeeded--
            if (index !== -1) {
                bag.splice(index, 1);
            }
        }
        
        setHand(currentHand)
        setDraw(tilesNeeded)
        setBag(bag.length)
    }, []);

    const renderTiles = () => {
        if (hand) {
            return hand.map(tile =>
                <Draggable
                    grid={[5, 5]}>
                    <div className={styles.tile}>
                        <span className={styles.letter}>{tile.letter}<sub className={styles.value}>{tile.value}</sub></span></div>
                </Draggable>
            );
        }
    };

    return (
        <div className={styles.rack}>
            { hand ? renderTiles() : null}
        </div>
    )
}
