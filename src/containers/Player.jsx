import bag from '../bag'
import React, { useState, useEffect, useRef, useContext } from 'react';

export default function Player() {
    const tilesNeeded = useRef(7);
    const hand = useRef([])

    useEffect(() => {
        for (let i = 0; i < tilesNeeded.current; i++) {
            let index = Math.floor(Math.random()) * bag.length
            hand.current.push(bag[index])
            bag[index].inBag = false
            tilesNeeded.current -= 1
            console.log(tilesNeeded.current)
        }
    }, [hand.current]);


    console.log('hand', hand.current)

    // const renderHand = () => {
    //     return hand.map(tile =>
    //         <>
    //             <div>{tile.letter}</div>
    //             <div>{tile.value}</div>
    //         </>
    //     );
    // };
    return (
        <div>
            {hand.current ? hand.current.map(tile =>

                <>
                    <div>{tile.letter}</div>
                    <div>{tile.value}</div>
                </>
            )
                : null}
        </div>
    )
}
