import React, { useState, useEffect } from 'react';
import styles from './player.css';

export default function Player({ currentGame, addTile }) {
    const { bag } = currentGame;
    const [hand, setHand] = useState([])


    const [draw, setDraw] = useState(7)
    let currentHand = []

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

    const handleTileClick = (tile, index) => {
        addTile(tile);
        hand.splice(index, 1)
    }

    useEffect(() => {
        drawTiles(7)
    }, [])

    const handleSubmit = () => {

    }

    const renderTiles = () => {
        if (hand) {
            return hand.map((tile, index) =>
                <div className={styles.tile}
                    onClick={() => handleTileClick(tile, index)}>
                    <span className={styles.letter}>{tile.letter}<sub className={styles.value}>{tile.value}</sub></span>
                </div >
            );
        }
    };

    return (
        <div>
            <div className={styles.rackBoard}>
                <div className={styles.rack}>
                    {hand ? renderTiles() : null}
                </div>
            </div>
                <button className={styles.submit}>Submit Word</button>
        </div>
    )
}
