// const headerTitle= document.getElementById('header-title');
// const header= document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000'

// var title= document.querySelector('.title');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello-2";
// title.style.fontweight='bold';
// title.style.color='green';

// var items= document.getElementsByClassName('list-group-item');
// items[2].style.background='green';
// items[1].style.fontWeight = "900";
// items[0].style.fontWeight = "900";
// items[2].style.fontWeight = "900";
// items[3].style.fontWeight = "900";

// var li= document.getElementsByTagName('li');
// li[1].textContent="hello-2";
// li[2].style.display='none';
// li[1].style.background='green';

// for(var i=0; i<li.length;i++){
//     li[i].style.background='green';
// }

// var li = document.querySelectorAll('li');
// li[1].style.background='green';
// li[2].style.display='none';
// var itemlist = document.querySelector("#items");
//parent Element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.background='#f4f4f4';
//Parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.background='#f4f4f4';

//child nodes
// console.log(itemlist.childNodes);

//childrens
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='red';

// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='Hello 1';
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='Hello 4';
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

//create element
// create a div
// var newDiv = document.createElement('div');
//add class
// newDiv.className='Hello';
//add id
// newDiv.id= 'hello1';
//add attr
// newDiv.setAttribute('title', 'Hello Div');

//create text node
// var newDivText = document.createTextNode('Hello World');

// add text in div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize= '30px';
// container.insertBefore(newDiv,h1);
// console.log(newDiv);
// console.log(newitem);
// var li = document.querySelector('li');
// console.log(li);
// itemlist.insertBefore(newDiv,li);


var form= document.getElementById('addForm');
var itemlist = document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemlist.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    //get input value
    var newitem = document.getElementById('item').value;
    //add class
    var li = document.createElement('li');
    li.className='list-group-item'
    // console.log(li);
    li.appendChild(document.createTextNode(newitem));
    //create delete button element
    var deletebtn = document.createElement('button');   
    //add button to del
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deletebtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deletebtn);
    //append li to list
    itemlist.appendChild(li);   
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}