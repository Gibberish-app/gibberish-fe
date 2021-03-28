import React, { useEffect } from 'react';
import Cells from '../cells/Cells';
import boardMap from '../cells/boardMap';
import styles from '../../containers/style/Containers.css';

const Board = ({ currentPlay }) => {
    // const boardTilePosition = []

    // useEffect(() => {
    //     console.log(currentPlay)
    // }, [currentPlay])

    return (
        <div className={styles.board}>
            <table>
                <tbody>
                    {currentPlay.map(row =>
                        <td>
                            {row.letter}<sub className={styles.value}>{row.value}</sub>
                        </td>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Board;
