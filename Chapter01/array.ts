const myFunc = (message:string):void => {
    console.log(message);
}

const func = () => console.log('func')
const func1 = () => ({ name: 'dave '})
const func2 = () => {
    const val = 20;
    return val;
}


myFunc('hello')

