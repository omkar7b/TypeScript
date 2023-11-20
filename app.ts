const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const btnEle = document.querySelector('button')!;

function add(num1: number, num2: number) {
    return num1 + num2;
}


btnEle.addEventListener('click', () => {
      const num1 = num1Ele.value;
      const num2 = num2Ele.value;
      const result = add(+num1, +num2);
      console.log(result);
})


//Working with Union Types
const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const btnEle = document.querySelector('button')!;

function add(num1: number | string , num2: number | string) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}


btnEle.addEventListener('click', () => {
      const num1 = num1Ele.value;
      const num2 = num2Ele.value;
      const result = add(+num1, +num2);
      const stringResult = add(num1, num2);
      console.log(result);
      console.log(stringResult);
})


//Using Object and Array types 

const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const btnEle = document.querySelector('button')!;

const numResults: number[] = [];
const textResult: string[] = []; 

function add(num1: number | string , num2: number | string) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: {val: number; timestamp: Date}){
    console.log(resultObj.val);
}

btnEle.addEventListener('click', () => {
      const num1 = num1Ele.value;
      const num2 = num2Ele.value;
      const result = add(+num1, +num2);
      numResults.push(result as number);
      const stringResult = add(num1, num2);
      textResult.push(stringResult as string);
      console.log(result);
      console.log(stringResult);
      printResult({val: result as number, timestamp: new Date()});
      console.log(numResults, textResult);
})

//Working with type Aliases and Interfaces

const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const btnEle = document.querySelector('button')!;

const numResults: number[] = [];
const textResult: string[] = []; 

type NumOrString = number | string;
type Result = {val: number; timestamp: Date};

interface resultObj{
    val: number;
    timestamp: Date;
}


function add(num1: number | string , num2: number | string) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: Result ){
    console.log(resultObj.val);
}

btnEle.addEventListener('click', () => {
      const num1 = num1Ele.value;
      const num2 = num2Ele.value;
      const result = add(+num1, +num2);
      numResults.push(result as number);
      const stringResult = add(num1, num2);
      textResult.push(stringResult as string);
      console.log(result);
      console.log(stringResult);
      printResult({val: result as number, timestamp: new Date()});
      console.log(numResults, textResult);
})

//Understanding Generics 
//type interacts with anotheer type

const numResults: Array<number> = [];


const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('It Worked!')
    }, 1000);
})

myPromise.then((result) => {
    console.log(result.split(' '));
})