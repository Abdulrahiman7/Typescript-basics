// Wrap your code in a function or block scope

    const numberElement1 = document.getElementById('num1') as HTMLInputElement;
    const numberElement2 = document.getElementById('num2') as HTMLInputElement;
    const button = document.querySelector('button');

    const numArr:Array<number>=[];  //generics
    const strArr:string[]=[];       

    type numOrstr= number | string;     //Aliases

    interface resultObj{
        val:number; 
        time:Date
    }

    function printResult(obj:resultObj)
    {
        console.log(obj);
    }

    function addition(num1: numOrstr, num2:numOrstr)
    {
        if(typeof num1 === 'number' && typeof num1 === 'number')
        {
            return +num1 + +num2;
        }else if(typeof num1 === 'string' && typeof num1 === 'string')
        {
            return num1+num2;
        }else 
        return +num1 + +num2;
        
    }
    
    if(button)
    {
        button.addEventListener('click',()=>{
            const number1=numberElement1.value;
            const number2=numberElement2.value;
            const numberResult=addition(+number1, +number2);
            numArr.push(numberResult as number);
            console.log(numberResult);

            const stringResult=addition(number1, number2)
            strArr.push(stringResult as string);
        console.log(stringResult);

        printResult({val:numberResult as number, time: new Date()});

        console.log(numArr, strArr);
        })
    }

const prom=new Promise<string>((resolve, reject)=>{
    setTimeout(() =>{
        resolve('it worked');
    },1000);
});
prom.then((res)=>{
    console.log(res.split('w'));
})