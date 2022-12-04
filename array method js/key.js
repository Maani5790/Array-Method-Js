const keyPress = () =>{
    document.getElementById("keys").innerHTML = `u press ${event.key} and code is ${event.code}  `

}

const keyDown = ()=>{
    document.getElementById("keys").innerHTML = "key is down";
}

const keyUp = ()=>{
    document.getElementById("keys").innerHTML = "key is up";
}