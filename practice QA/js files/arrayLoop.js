const arr =['hello','world','search','good','world'];
const arrlength = arr.length;

//to check if the array has within it 'search'
if(arr.includes('search'))
{
    console.log("true");
    console.log(arr.indexOf('search'));
}
else
{
    console.log(arr.indexOf('search'));
}

function findIndex(array, word)
{
    //to check if the array has within it 'search'
    if(array.includes(word))
    {
        console.log("true");
        console.log(array.indexOf(word));
    }
    else
    {
        console.log(array.indexOf(word));
    }

    //this is the way to identify and store unique characters in the array
    const uniqueChars = [...new Set(array)];

    console.log(`The unique words are : ${uniqueChars}`);

}

findIndex(arr, 'roath');
findIndex(arr, 'good');

const egg = ['egg','apple','egg','egg','ham'];

//to remove eggs from the function, removes the first two eggs from the array
function removeEggs(foods)
{
    const printArr =[];
    let count = 0;
    const length = foods.length;
    for(let i=0; i<length; i++)
    {
        if(foods[i]===('egg') && count<2)
        {
            count+=1;
            continue;
        }
        else
        {
            printArr.push(foods[i]);
        }
    }
    return printArr;
}


//removes the last 2 eggs from the function
function removeEggs_reverse(foods)
{
    const reverse_food = foods.reverse();
    console.log(reverse_food);

    return removeEggs(reverse_food).reverse();
    
}

console.log(removeEggs_reverse(egg));
console.log(removeEggs(egg));

//fizz buzz problem
function fizzBuzz()
{
    for(let i = 1; i<=20; i++)
    {
        if(i%3===0 && i%5!==0)
        {
            console.log('Fizz');
        }
        else if(i%5===0 && i%3!==0)
        {
            console.log('Buzz');
        }
        else if (i%3===0 && i%5===0)
        {
            console.log('FizzBuzz');
        }
        else
        {
            console.log(i);
        }
    }
}
fizzBuzz();