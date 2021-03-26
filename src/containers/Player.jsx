import bag from '../bag'
import React, { useState, useEffect, useRef, useContext } from 'react';

export default function Player() {

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


    }, []);


    const renderTiles = () => {
        if (hand) {
            return hand.map(tile =>
                <div>{tile.letter} {tile.value}</div>
            );
        }
    };

    return (
        <div>
            { hand ? renderTiles() : null}
        </div>
    )
}
