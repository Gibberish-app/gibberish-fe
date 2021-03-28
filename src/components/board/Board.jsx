import React, { useEffect } from 'react';
import Cells from '../cells/Cells';
import boardMap from '../cells/boardMap';
import '../../containers/style/Containers.css';

const fullBoard = [
    [4, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 4],
    [0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0],
    [0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0],
    [1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [4, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 4],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1],
    [0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0],
    [0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0],
    [4, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 4]
]

const Board = ({ setSpotPosition }) => {
    const boardTilePosition = []

    useEffect(() => {
        setSpotPosition(boardTilePosition)
    }, [])

    return (
        <div>
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
