
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


function submit() {
    let author = document.getElementById("author").value;
    let newsTitle = document.getElementById("newsTitle").value;
    let description = document.getElementById("description").value;
    let imageInput = document.getElementById("image");

    //Get the selected image file
    let imageFile = imageInput.files[0];

    if (author.trim() === "" || newsTitle.trim() === "" || description.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!imageFile) {
        alert("Please select an image to upload.");
        return;
    }

    console.log("Author: " + author);
    console.log("News Title: " + newsTitle);
    console.log("Description: " + description);
    console.log("Image File Name: " + imageFile.name);

    document.getElementById("comment").style.display = "block";    
}

function enter(){
    document.getElementById("display-comment").style.display = "block";
}


function enter() {
    let cname = document.getElementById("cname").value;
    let userComment = document.getElementById("userComment").value;

    // Display entered data in the "display-comment" div
    document.getElementById("display-cname").textContent = "Name: " + cname;
    document.getElementById("display-comment-text").textContent = "Comment: " + userComment;

    // Show the "display-comment" div
    document.getElementById("display-comment").style.display = "block";
}
