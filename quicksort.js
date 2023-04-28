const unsorttedArr = [6, 5, 3, 7, 8, 2, 9, 1, 4]

//sorts an array for all values between the indeces of lo and high
//'splits' array into partitions
//sorts each of the partitions
function quickSort(arr, low, high) {
    //returns if the hi and lo values are the same or if lo is greater
    //because we will call this function recursively, this will happen once a partition is only 1 element 
    if(low >= high || low < 0) {
        return
    }
    //partitions the array and gives the index to pivot from
    let p = partition(arr, low, high)
    //sorts to the left of the pivot
    quickSort(arr, low, p-1)
    //sorts to the right of the pivot
    quickSort(arr, p + 1, high)
}

//Itterates over partitions of an array, moving values lower than the pivot to the left and higher values to the right
function partition(arr, low, high) {
    //sets the pivot to value of the highest item of the array
    let pivot = arr[high]

    //sets a temp pivot index
    let i = low - 1

    //iterates through the array between the lowest index and the pivot
    for(let j = low; j < high; j++) {
        //for each value, checks if it is lower than the value of the pivot, if it is; then move the temp index to the "right"/up one value and swaps the values. 
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    //Moves the pivot up and swaps the pivot with the value at the highest index
    //returns the temp pivot
    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]]
    return i
}

//sorts the entire array and logs the result
quickSort(unsorttedArr, 0, unsorttedArr.length - 1)
console.log(unsorttedArr)