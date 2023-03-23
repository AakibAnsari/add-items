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

var li= document.getElementsByTagName('li');
li[1].textContent="hello-2";
li[1].style.fontWeight='bold';
// li[1].style.background='green';

for(var i=0; i<li.length;i++){
    li[i].style.background='green';
}
