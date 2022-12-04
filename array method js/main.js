const box = document.getElementById("box");

box.addEventListener('mouseenter', ()=>{
    box.style.background = 'black';
    console.log("mouse enter bro");
})

box.addEventListener('mouseleave', ()=>{
    box.style.background = 'blue';
    console.log("mouse leave bro");
})

box.addEventListener('mousedown', ()=>{
    box.style.background = "white";
    console.log("mouse down bro");
})