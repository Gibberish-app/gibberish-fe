import React, { useEffect } from 'react';
import Cells from '../cells/Cells';
import boardMap from '../cells/boardMap';
import styles from '../../containers/style/Containers.css';

const fullBoard = [
    [0, 0, 0, 0, 0, 0, 0]
]

const Board = ({ setSpotPosition }) => {
    const boardTilePosition = []

    useEffect(() => {
        setSpotPosition(boardTilePosition)
    }, [])

    return (
        <div className={styles.board}>
            <table>
                <tbody>
                    {fullBoard.map(row =>
                        <tr>
                            {row.map(col => <td

                                ref={row => {
                                    if (!row) return;
                                    boardTilePosition.push(row.getBoundingClientRect());
                                }
                                }>{Cells(boardMap[col])}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Board;
