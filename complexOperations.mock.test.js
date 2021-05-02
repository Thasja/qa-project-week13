import 'jest';
import funcMock from './complexOperations.mock';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    describe('checkEmail', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('fifth test enter a valid email', () => {
        expect(complexOperations.checkEmail('test@radiumrocket.com')).toBe('The email is valid');
      });
      it('forth test enter a string but not an email', () => {
        jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
        expect(complexOperations.checkEmail('test@.com')).toBe('The email is invalid');
      });
      it('first test not enter a string', () => {
        jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
        expect(complexOperations.checkEmail(1234)).toBe('The email should be an string');
      });
      it('second test enter not nothing', () => {
        expect(complexOperations.checkEmail()).toBe('The email should be an string');
      });
      it('third test enter not a string', () => {
        expect(complexOperations.checkEmail('')).toBe('The email should be an string');
      });
    });
  
    describe('calculateArea', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('first test not supported figure', () => {
        expect(complexOperations.calculateArea('pentagon', 5)).toBe('pentagon is not supported');
      });
      it('fifth test figure is square and number1 and number2 are numbers', () => {
        expect(complexOperations.calculateArea('square', 3, 3)).toBe(9);
      });
      it('sixth test figure is rectangle and number1 and number2 are numbers', () => {
        expect(complexOperations.calculateArea('rectangle', 3, 3)).toBe(9);
      });
      it('seventh test figure is triangle and number1 and number2 are numbers', () => {
        expect(complexOperations.calculateArea('triangle', 3, 3)).toBe(80);
      });
      it('eight test figure is circle and number1 and number2 are numbers', () => {
        expect(complexOperations.calculateArea('circle', 4, 4)).toBe(50.26548245743669);
      }); 
      it('second test number1 and number2 are not a number', () => {
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
        expect(complexOperations.calculateArea('square', 'test', 'test')).toBe('number1 and number2 should be numbers');
      });
      it('third test number1 is not a number', () => {
        expect(complexOperations.calculateArea('square', 'test', 3)).toBe('number1 and number2 should be numbers');
      });
      it('forth test number2 is not a number', () => {
        expect(complexOperations.calculateArea('square', 3, 'test')).toBe('number1 and number2 should be numbers');
      });
    });
  
    describe('sumGratherThan', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('forth test number3 is less than number1 and number2 together', () => {
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
        jest.spyOn(basicOperations, 'sum').mockReturnValue(11);
        expect(complexOperations.sumGratherThan(5, 6, 9)).toBe('11 is grather than 9'); 
      });
      it('fifth test number3 is greater than number1 and number2 together', () => {
        jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
        expect(complexOperations.sumGratherThan(10, 10, 54)).toBe('5 is less than 54'); 
      });
      it('sixth test number3 is equal to number1 and number2 together', () => {
        expect(complexOperations.sumGratherThan(-5, 10, 5)).toBe('5 is equal to 5'); 
      });
      it('first test enter nothing', () => {
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
        expect(complexOperations.sumGratherThan()).toBe('The params should be numbers'); 
      });
      it('second test number1 is not a number and number2 en number3 are numbers', () => {
        expect(complexOperations.sumGratherThan('test', 5, 5)).toBe('The params should be numbers'); 
      });
      it('third test number1 is an array and number2 undefined', () => {
        expect(complexOperations.sumGratherThan([], undefined)).toBe('The params should be numbers'); 
      });
    });
  
    describe('intersectionBetweenArrays', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('Third test enter matching elements in both arrays', () => {
        expect(complexOperations.intersectionBetweenArrays([1,2,3], [1,3])).toBe[1,3]; 
      });
      it('forth test enter matching elements in both arrays', () => {
        expect(complexOperations.intersectionBetweenArrays([1,'test',3], [13,18, 'test'])).toBe['test']; 
      });
      it('fifth test enter without matching elements in both arrays', () => {
        jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
        expect(complexOperations.intersectionBetweenArrays([1,2,3], [8, 'test', 9])).toBe('There are not matching elements'); 
      });
      it('first test enter nothing', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
        expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays'); 
      });
      it('Second test enter only array1', () => {
        expect(complexOperations.intersectionBetweenArrays([1,2,3])).toBe('The params should be arrays'); 
      });
      
    });
  
    describe('sortArrayOfObjectsByKey', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('seventh test all elements have name property', () => {
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Valerio' }, { name: 'Fausto' }], 'name')).toBe[{ name: 'Alessio' }, { name: 'Valerio' }, { name: 'Fausto' }]; 
      });
      it('eight test all elements have name property and value is the same of all elements', () => {
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Alessio' }], 'name')).toBe[{ name: 'Alessio' }, { name: 'Alessio' }]; 
      });
      it('sixth test 1 element in array does not have name property', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
        jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
        jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Valerio' }, {noName: 'John Doe'}, { name: 'Fausto' }], 'name')).toBe('Some elements in the array does not have the name property'); 
      });
      it('first test first param is not an array', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
        expect(complexOperations.sortArrayOfObjectsByKey('test', 'test')).toBe('The first param should be an array'); 
      });
      it('second test first param is undefined', () => {
        expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'test')).toBe('The first param should be an array'); 
      });
      it('third test second array is not a string entering an array', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
        jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Valerio' }, { name: 'Fausto' }], [12, 14, 16, 18])).toBe('The second param should be an string'); 
      });
      it('forth test second array is not a string entering nothing', () => {
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Valerio' }, { name: 'Fausto' }],)).toBe('The second param should be an string'); 
      });
      it('fifth test second array is not a string entering a number', () => {
        expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Alessio' }, { name: 'Valerio' }, { name: 'Fausto' }],566)).toBe('The second param should be an string'); 
      });
    });
  
    describe('numberOfOddAndEvenNumbers', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      it('forth test enter even numbers in array', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
        expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6,8])).toStrictEqual({odd: 9, even: 9});
      });
      it('fifth test enter odd numbers in array', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers([1,3,5,7,9])).toStrictEqual({odd: 9, even: 9});
      });
      it('sixth test enter odd and even numbers in array', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5,6,7,8,9])).toStrictEqual({odd: 9, even: 9});
      });
      it('first test not an array', () => {
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
        expect(complexOperations.numberOfOddAndEvenNumbers('test')).toBe('The param should be an array');
      });
      it('second test enter nothing', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
      });
      it('third test enter string in array', () => {
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
        expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3, 'test', 5,6])).toBe('The array should have only numbers');
      });
    });
  });