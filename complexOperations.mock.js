import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(5);
let multip = jest.fn().mockReturnValue(9);
let division = jest.fn().mockReturnValue(80);
let exponent = jest.fn().mockReturnValue(16);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue(['test']);
let getEvenNumbersFromArray = jest.fn().mockReturnValue('[2, 4, 6]');
let getOddNumbersFromArray = jest.fn().mockReturnValue('[1, 3, 5]');


const funcMock = jest.mock('./basicOperations', () => {
    return {
    isString,
    validateEmail,
    isArray,
    isNumber,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    sum,
    multip,
    division,
    exponent,
    arrayIntersection,
    getOddNumbersFromArray,
    getEvenNumbersFromArray,
    };
});

export default funcMock;