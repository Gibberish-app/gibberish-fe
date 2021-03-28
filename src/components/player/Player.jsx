import React, { useState, useEffect } from 'react';
import { socket } from '../../utils/socket/socket';
import styles from './player.css';

export default function Player({ currentGame, addTile, currentHand, seedHand, handleSubmit }) {
    const { bag } = currentGame.current;

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
