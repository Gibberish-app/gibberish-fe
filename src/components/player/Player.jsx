import React, { useState, useEffect } from 'react';
import styles from './player.css';

export default function Player({ currentGame, addTile, currentHand, seedHand }) {
    const { bag } = currentGame;

    const drawTiles = (tilesNeeded) => {
        const localHand = [];
        for (let i = 0; i < tilesNeeded; i++) {

            let index = Math.floor(Math.random() * bag.length)
            localHand.push(bag[index])
            if (index !== -1) {
                bag.splice(index, 1);
            }
        }
        seedHand(localHand)
    }

    const handleTileClick = (tile, index) => {
        addTile(tile, index);
    }

    useEffect(() => {
        drawTiles(7)
    }, [])

    const handleSubmit = () => {
        console.log("SUBMIT!")
    }

    const renderTiles = () => {
        if (currentHand) {
            return currentHand.map((tile, index) =>
                <div className={styles.tile}
                    onClick={() => handleTileClick(tile, index)}>
                    <span className={styles.letter}>{tile.letter}<sub className={styles.value}>{tile.value}</sub></span>
                </div >
            );
        }
    };

    return (
        <div className={styles.player}>
            <div className={styles.rackBoard}>
                <div className={styles.rack}>
                    {currentHand ? renderTiles() : null}
                </div>
            </div>
            <button className={styles.submit}>Submit Word</button>
        </div>
    )
}
