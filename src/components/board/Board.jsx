import React, { useEffect } from 'react';
import Cells from '../cells/Cells';
import boardMap from '../cells/boardMap';
import styles from '../../containers/style/Containers.css';

const Board = ({ currentPlay, removeTile }) => {

    return (
        <div className={styles.board}>
            <table>
                <tbody>
                    {currentPlay.map((tile, index) =>
                        <td
                            onClick={() => { removeTile(tile, index) }}>
                            {tile.letter}<sub className={styles.value}>{tile.value}</sub>
                        </td>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Board;
