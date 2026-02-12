const todoList1=[]; //this is an empty array
const todoList2=[]; //this is another empty array
const todoList3=[];


//to fetch the input when 'Enter' is pressed
function getInput_Enter(event)
{
    if(event.key === 'Enter')
    {
        add_todo1();
    }
}


//to add to the to do list whenever we press enter/add button 
function add_todo1()
{
    //to get the inside of the input box
    const inputElement = document.querySelector('.add_1_box');

    //to get the value of the input box
    const name = inputElement.value;
    //to push the value at the last of the array
    todoList1.push(name);

    console.log(todoList1);

    //to reset the textbox each time after we an element
    inputElement.value = '';
}



function add_todo2()
{
    const inputElement = document.querySelector('.add_2_box');
    const name = inputElement.value;
    //to push the value at the last of the array
    todoList2.push(name);

    //console.log(todoList2);

    //to reset the textbox each time after we an element
    inputElement.value = '';
    let todoListHtml = '';

    //to render the array
    //save the data to generate the html
    // for (let i=0; i<todoList2.length; i++)
    // {
    //    const todo = todoList2[i];
    //    const html = `<p>${todoList2[i]}</p>`;
    //    todoListHtml +=html;
    // }


    //forEach loop to go through the function
    todoList2.forEach(function(todoObject, index)
    {
            const html = `<p>${todoList2[index]}</p>`;
            todoListHtml +=html;
    });

     document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
}
     

function add_todo3()
{
    const inputElement = document.querySelector('.add_3_box');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.due_date');
    const date = dateInputElement.value;
    //to push the value at the last of the array
    todoList3.push({
        //name: name,
        //date: date
        //if the variable name and the name of the property are the same, then we can use the shorthand property and declare the variable name once
        name,
        date
    });


    console.log(todoList3);

    //to reset the textbox each time after we an element
    inputElement.value = '';
    renderTodoList();
}



function delete_todo(index) {
    todoList3.splice(index, 1);// here 1 is a delete count, not index
    renderTodoList();
}


function renderTodoList()
{
    let todoListHtml = '';

    
    //to render the array
    //save the data to generate the html
    // for (let i=0; i<todoList3.length; i++)
    // {
    //    const todo = todoList3[i];
    //    const html = `
    //    <div>${todoList3[i].name}</div>
    //    <div>${todoList3[i].date}</div>
    //    <button class="delete_todo" onclick="delete_todo(${i});">
    //         Delete
    //    </button>`;
    //    todoListHtml +=html;
    // }

    todoList3.forEach(function(todoListObject, index)
    {
        const html = `
        <div>${todoList3[index].name}</div>
        <div>${todoList3[index].date}</div>
        <button class="delete_todo js-delete-todo-btn">
                Delete
        </button>`;
        todoListHtml +=html;
    });

     document.querySelector('.js-add-delete-todo')
        .innerHTML = todoListHtml;


        
    // here if we take the example of index, then we can say if a function has access to a value, it will always have access to the value
    //value gets packaged together (enclosed) with the function
    //this is called closure
    document.querySelectorAll('.js-delete-todo-btn')
        .forEach((button, index) =>
            {
                button.addEventListener('click', () => delete_todo(index))
            });

} 