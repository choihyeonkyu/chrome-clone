function sayHello(){
    clock.innerText = new Date().toLocaleTimeString();
}
    
sayHello();
setInterval(sayHello, 1000);