
export default function returnScore(tileArray) {
    const score = tileArray.reduce(reducer, 0)

    return score;
}


const reducer = (accumulator, { value }) => accumulator + value