const unsorttedArr = [6, 5, 3, 7, 8, 2, 9, 1, 4]

//sorts an array for all values between the indeces of low and high
//'splits' array into partitions
//sorts each of the partitions
function quickSort(arr, low, high) {
    //returns once there is only one element in a partition 
    if(low >= high || low < 0) {
        return
    }
    //partitions the array and gives the index of the "pivot"
    let p = partition(arr, low, high)
    //sorts to the left of the pivot
    quickSort(arr, low, p-1)
    //sorts to the right of the pivot
    quickSort(arr, p + 1, high)
}

//Itterates over partitions of an array, moving values lower than the pivot to the left and higher values to the right
function partition(arr, low, high) {
    //sets the pivot value to the value at the highest index of the partition
    let pivot = arr[high]

    //sets a temp pivot index
    let i = low - 1

    // iterates between the low and high indices moving values lower than the
    // pivot value to the left of the temporary pivot index
    for(let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    //inserts the pivot at the proper pivot index and returns the index
    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]]
    return i
}

//sorts the entire array and logs the result
quickSort(unsorttedArr, 0, unsorttedArr.length - 1)
console.log(unsorttedArr)