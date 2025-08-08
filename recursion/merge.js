function merge(l, r) {
    let result = []

    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < r.length; j++) {
            if (i < l.length && j < r.length) {
                if (l[i] < r[j]) {
                    result.push(l[i])
                } else {
                    result.push(r[j])
                }
            }
            if (l[i] < r[j]) {
                result.push(l[i])
            } else {
                result.push(r[j])
            }
        }
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 9, 5, 3, 7, 2]))
