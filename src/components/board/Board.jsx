import React from 'react';
import styles from '../../containers/style/Containers.css';

const Board = ({ currentPlay, removeTile }) => {

    return (
        <div className={styles.board}>
            <table>
                <tbody>
                    <tr>
                        {currentPlay.map((tile, index) =>
                            <td
                                onClick={() => { removeTile(tile, index) }}
                                key={`tile${index}`}>
                                {tile.letter}<sub className={styles.value}>{tile.value}</sub>
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board;
