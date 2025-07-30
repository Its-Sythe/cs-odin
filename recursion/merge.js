function merge(l, r) {
    let result = []
    
    let  i = 0; j = 0;
    // Check that both of the arrays are not empty
    while ( i < l.length && j < r.length) {
        // Check whether the element at i in the left array is less than 
        // that of the right array
        if (l[i] < r[j]) {
            //if true push the left one to the results array
            result.push(l[i])
            //Increment the counter for the base case of the loop by 1
            i++
        // Otherwise do the opposite and also increment j by 1
        } else {
            result.push(r[j])
            j++
        }
    }
    
    // Check for individual items in the arrays
    for(i; i < l.length; i++) {
        result.push(l[i])
    }

    for(j; j < r.length; j++) {
        result.push(r[j])
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
