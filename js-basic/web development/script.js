const btn = document.querySelector(".btn");
    
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click');
});

const btn1 = document.querySelector(".btn");
    
btn1.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hover Hello</h1>';
});

const btn2 = document.querySelector(".btn");
    
btn2.addEventListener('mouseout', (e) =>{
    e.preventDefault();
    document.querySelector('.items').firstElementChild.innerHTML='<h1>MouseOut Hello</h1>';
});