import React, { useState, useEffect, useRef, useContext } from 'react';
import Draggable from 'react-draggable';
import styles from './player.css';

export default function Player({ currentGame }) {
    const { bag } = currentGame;
    const hand = useRef([])

    const [draw, setDraw] = useState(7)
    let currentHand = []
    let tilesNeeded = 7


    const drawTiles = (tilesNeeded) => {
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
    }

    useEffect(() => {
        drawTiles(7)
    }, []);

    const renderTiles = () => {
        if (hand) {
            return hand.map(tile =>
                    <div className={styles.tile}
                    onClick={() => console.log('click')}>
                        <span className={styles.letter}>{tile.letter}<sub className={styles.value}>{tile.value}</sub></span></div>
            );
        }
    };

    return (
        <div className={styles.rack}>
            { hand.current ? hand.current : null}
        </div>
    )
}
