// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let first, second, third;

    if (nums.length < 3) {
        third = undefined;
    } else {
        first = nums[0], second = -Infinity, third = -Infinity;

        for (let i = 1; i < nums.length ; i++) {
            if (nums[i] > first) {
                third = second;
                second = first;
                first = nums[i];
            } else if (nums[i] > second) {
                third = second;
                second = nums[i];
            } else if (nums[i] > third) {
                third = nums[i];
            }
        }
    }
    return third;
}
// No pude hacerlo. No salen todas 'true'

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3[(3,4)] === undefined);
console.log(greater3[(4,4,4)] === 4);
console.log(greater3[(1,1,2,5)] === 1);
