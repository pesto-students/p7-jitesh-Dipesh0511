function hasduplicate(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j])
                count++;
        }
    };
    if (count > array.length) {
        console.log(`Array has ${(count-array.length)/2} nos of duplicate values`);
    }
}
hasduplicate([1, 34, 2, 1, 32, 3, 2]);