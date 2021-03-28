import React, { useEffect } from 'react';
import Cells from '../cells/Cells';
import boardMap from '../cells/boardMap';
import styles from '../../containers/style/Containers.css';

const fullBoard = [
    [0, 0, 0, 0, 0, 0, 0]
]

const Board = ({ currentPlay }) => {
    const boardTilePosition = []

    useEffect(() => {
        console.log(currentPlay)
    }, [currentPlay])

    return (
        <div className={styles.board}>
            <table>
                <tbody>
                    {currentPlay.map(row =>
                        <tr>
                            {row.letter}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Board;
