function knightMoves(start, end) {
    const gallops = [
        [1, 2], [1, -2], [-1, 2], [-1, -2],
        [2, 1], [2, -1], [-2, 1], [-2, -1]
    ];

    function validPos(pos) {
        return pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <=7;
    }

    function makeGallop(pos) {
        if (!validPos(pos)) return;

        let allGallops = [];
        for (let i = 0; i < gallops.length; i++) {
            let gallop = [(pos[0] + gallops[i][0]), (pos[1] + gallops[i][1])];
            if (validPos(gallop)) allGallops.push(gallop);
        }
        return allGallops;
    }

    let queue = [[start, [start]]]
    let visited = [start]

    while (queue.length != 0) {
        let [curr, path] = queue.shift();
        let moves = makeGallop(curr);
        for (let i = 0; i < moves.length; i++) {
            let next = moves[i];
            if (next[0] == end[0] && next[1] == end[1]) {
                prettyPrint([...path, next])
                return [...path, next]
            }
            if (!visited.some((node) => node[0] == next[0] && node[1] == next[1])) {
                visited.push(next);
                queue.push([next, [...path, next]])
            }
        }
    }
}

function prettyPrint(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path: `);
    for (let i = 0; i < path.length; i++) {
        console.log(path[i])
    }
}
knightMoves([0, 0], [7, 7])
