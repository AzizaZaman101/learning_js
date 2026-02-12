
const add = () =>
{
    console.log(2+3);
}


add(); //before I used console.log(add) --> it didn't work, as the whole function got printed, so using parenthesis helped 
add();


function runTwice(fun)
{
    fun();
    fun();
}

runTwice(() =>
{
    console.log("12b"); 
}); //I didn't put a semicolon after this --> that's why i was getting an error

runTwice(add);

function changeVal()
{
    const val = document.querySelector('.btn').innerText;
    console.log(val);
 
    if(val==='Start')
    {
        //I was trying to do val = 'Finished', but it didn't work, first of all it was declared to be const, and we have to use DOM to do this kinda things
       document.querySelector('.btn').innerText = 'Loading...';
        
        //sets the innerText to Start using a setTimeout function 
        setTimeout(() =>
        {
            document.querySelector('.btn').innerText = 'Finished!';
        
            //we have moved this function inside the setTimeout function for it to work smoothly
            setTimeout(() =>
            {
                document.querySelector('.btn').innerText = 'Start';
            },1000);

        },1000);
    }
}


function changeCart()
{
    const val = document.querySelector('.cart-btn').innerText;
    console.log(val);
    if(val === 'Add to Cart')
    {
        setTimeout(() =>
        {
            document.querySelector('.added').innerText = 'Added!';
            document.querySelector('.cart-btn').disabled = true;
        
            //we have moved this function inside the setTimeout function for it to work smoothly
            setTimeout(() =>
            {
                document.querySelector('.added').innerText = '';
                document.querySelector('.cart-btn').disabled = false;
            },2000);

        });
    }
}

//have to change the title to how many messages we have recieved
let message;


const multiply = (val1, val2) => console.log(val1*val2);

multiply(4,7);



//counts postive numbers in an array
const countPositiveNumbers = (nums) => //this itself is an anonymus array funtion
{
    let count = 0;
       
    nums.forEach(value =>  //from here we start the forEach loop from inside the function
    { 
        if(value > 0)
        {
            count++;
        }
    });

    return count;//we can't return from inside the forEach loop
};

console.log(countPositiveNumbers([1,-7,5,4,-7,-9]));


//adds numbers to the array

const addNum = (nums, add) =>
{
    return nums.map(num => num+add); 
    //in here i was fairly confused, as it seems that the map function is taking only one paramater, but the 'add' variable is already inside the scope of the function, so we are able to access it within the function. And by putting the num as the parameter of the map function, we are able to iterate through the values of the num array
};

console.log(addNum([1,12,2,4],3));





