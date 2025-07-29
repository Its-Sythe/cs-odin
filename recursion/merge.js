function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log("Reached base case: ", arr)
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    console.log(`Split into ${left} and ${right}`)

    let sortLeft = mergeSort(left);
    console.log("Ended left with: ", sortLeft)
    let sortRight = mergeSort(right);
    console.log("Ended right with: ", sortRight)
    let sorted;
    return sorted;
}

mergeSort([1, 9, 5, 3, 7, 2])
