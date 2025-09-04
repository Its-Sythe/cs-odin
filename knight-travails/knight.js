const possibleMoves = [ // These are possible movements a knight can make at given point (x,y)
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, -2],
    [-1, 2]
]

function makeMove(pos) {
    let allMoves = []
    possibleMoves.forEach((move) => {
        let moveMade = [(pos.at(0) + move.at(0)), (pos.at(1) + move.at(1))]
        if ((moveMade.at(0) <= 7 && moveMade.at(0) >= 0) && (moveMade.at(1) <= 7 && moveMade.at(1) >= 0)) {
            allMoves.push(moveMade)
        }
    }) 
    return allMoves
}

