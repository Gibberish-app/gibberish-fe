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
        const newHand = draggableHand(currentHand)
        console.log(newHand)
        hand.current = newHand;
        setDraw(tilesNeeded)
    }

    useEffect(() => {
        drawTiles(7)
    }, []);

    const handleStop = (e, tile, index) => {
        let x = e.x - 76;
        let y = e.y - 150;

        if (x % 46 !== 0) {
            x = x - (x % 46)


    const draggableHand = (currentHand) => {
        return currentHand.map((tile, index) =>
            <Draggable
                grid={[5, 5]}
                onStop={(e) => handleStop(e, tile, index, currentHand)}
            >
                <div id='gfg' className={styles.tile}>
                    <span className={styles.letter}>{tile.letter}<sub className={styles.value}>{tile.value}</sub></span></div>
            </Draggable>
        );
    }



    return (
        <div className={styles.rack}>
            { hand.current ? hand.current : null}
        </div>
    )
}
