const username = "admin";
const password = "1234";
let Mdiv = document.getElementById('myDiv');


function login(){
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('pass').value;

    if(userInput === username && passInput === password){
        Mdiv.style.display = 'block';
    }else{
        console.log("Incorrect email or password !!!");
    }
}
console.log("hi");