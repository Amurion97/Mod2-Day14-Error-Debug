function calculator(number1: number, number2: number, operator: string): number {
    let result: number;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else {
        throw new RangeError("The operator must be an +,-,*,/")
    }
    return result;
}

try {
    console.log(calculator(3, 9, '%'));
} catch (e: any) {
    if (e instanceof RangeError) {
        console.log(e.message)
    }
}