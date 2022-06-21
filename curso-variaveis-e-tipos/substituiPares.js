function substituiPares(oldArray) {
    if (!oldArray || !oldArray.length) return -1;

    let newArray = oldArray.map((element) => {
        if (element % 2 === 0 && element !== 0) {
            return 0;
        } else {
            return element;
        }
    })

    return newArray;
}

let testArray = [0, 1, 2, 3, 5, 8, 12, 31, 43];

console.log(substituiPares(testArray));
