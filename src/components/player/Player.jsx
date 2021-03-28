import React, { useState, useEffect } from 'react';
import { socket } from '../../utils/socket/socket';
import styles from './player.css';

export default function Player({ currentGame, addTile, currentHand, seedHand, handleSubmit, waiting, clearPlay }) {
    const { bag } = currentGame.current;

    const drawTiles = (tilesNeeded) => {
        const localHand = [];
        for (let i = 0; i < tilesNeeded; i++) {
            if (bag.length > 0) {
                let index = Math.floor(Math.random() * bag.length)
                localHand.push(bag[index])
                if (index !== -1) {
                    bag.splice(index, 1);
                }
            }
        }
        seedHand(localHand)
    }

    const handleTileClick = (tile, index) => {
        addTile(tile, index);
    }

    useEffect(() => {
        console.log('waiting changed')
        if (waiting === false) {
            const tilesNeeded = 7 - currentHand.length;
            drawTiles(tilesNeeded)
            clearPlay();
        }
    }, [waiting])

    const renderTiles = () => {
        if (currentHand) {
            return currentHand.map((tile, index) =>
                <div className={styles.tile}
                    onClick={() => handleTileClick(tile, index)}
                    key={`hand${index}`}>
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
            <button
                className={styles.submit}
                onClick={handleSubmit}
            >Submit Word</button>
        </div>
    )
}
