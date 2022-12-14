function find(list, predicate){

    let result = undefined;
    
    for (let i=0 ; i < list.length ; i++){
        if (predicate(list[i])){
            result = list[i];
            break;
        }
    }
    return result;
}

// var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(even)

function initial(array){
    let args = [...arguments];

    if (args.length > 1){
        return array.slice(0, arguments[1]);

    } else {
        return array.slice(0, array[array.length - 2])
    }
}

// let test = initial([1,2,3,4,5], 2);
// console.log(test);

function rest(array){
    let args = [...arguments];

    if (args.length > 1){
        return array.slice(arguments[1], array[array.length - 1]);

    } else {
        return array.slice(1, array[array.length - 1])
    }
}

// let test = rest([1,2,3,4,5], 2);
// console.log(test);

function indexOf(array, value){
    let args = [...arguments];
    let isSorted = false;
    let result;

    if(args.length > 2){
        if(args[2]){
            isSorted = true;
        }
    }
    if(isSorted){
        result = binarySearch(array, value, 0, array.length - 1)
        if(result){
            return result
        } else {
            return -1;
        }

    }else{
        for(let i = 0 ; i < array.length ; i++){
            if(array[i] === value){
                return i;
            }
        }
        return -1;
    }
}

function binarySearch(array, reqVal, start, end){
    if(start > end) return false;

    let mid = Math.floor((start + end)/2);

    if(array[mid] === reqVal) return mid;

    if(array[mid] > reqVal){

        return binarySearch(array, reqVal, start, mid-1);

    } else {

        return binarySearch(array, reqVal, mid+1, end);
    }
}

// let test = indexOf([1,2,3,4,5,6,7,8,11,35,67,88,9000,10000], 35, true);
// console.log(test);

function partition(list, predicate){
    const truthArr = _.reject(list, predicate);
    const falseArr = _.filter(list, predicate);

    return [truthArr,falseArr]; 
}

function compact(list){
    const result = [];

    for (let i=0 ; i < list.length ; i++){
        if(list[i]){
            result.push(list[i])
        }
    }
    return result;
}
// let test = compact([0, 1, false, 2, '', 3]);
// console.log(test);

function without(array){
    const result = [];
    const args = [...arguments];

    for(let i = 0 ; i < array.length ; i++){
        if(!args.includes(array[i])){
            result.push(array[i])
        }
    }
    return result;
}

// let test = without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// console.log(test);


function sample(list){
    let args = [...arguments];
    let numberOfVal = 1;
    let range = list.length - 1;
    let result = [];

    if (args.length > 1){
        numberOfVal = arguments[1];

        for(let i = 0 ; i < numberOfVal ; i++){
            result.push(list[Math.round(Math.random() * range)])
        }
        return result;

    } else {
        return list[Math.round(Math.random() * range)];
    }
}

// let test = sample([1, 2, 3, 4, 5, 6], 4);
// console.log(test);