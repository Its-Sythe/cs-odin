function fibs(n) {
    if (n == 1) return 0;


    let seq = [0, 1];
    for (let i = 0; i < n; i++) {
        let next = (seq.at(-1) + seq.at(-2))
        if (seq.length != n) {
            seq.push(next);
        } else {
            break;
        }
    }
    return seq;
}


function fibsRec(n, seq = [0, 1]) {
    if (seq.length == n) return seq;

    let next = seq.at(-1) + seq.at(-2)
    seq.push(next);
    return fibsRec(n, seq)
}

