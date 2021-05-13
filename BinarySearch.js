let testArray = [1,3,4,5,6,7,9,11,23,4,5,66,78,8]

function BinarySearch(arr,target){
    let from = 0,to = arr.length-1;
    let mid = Math.floor((from+to)/2)
    while(from <= to){
        mid = Math.floor((from+to)/2)
        if(target > arr[mid]){
            from = mid + 1
        } else if(target > arr[mid]){
            to = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

BinarySearch(testArray,6)
