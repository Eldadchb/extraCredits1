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