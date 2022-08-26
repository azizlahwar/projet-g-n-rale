


function visitPage(){
        var username = document.getElementsByClassName("input-line1").value;
        var password = document.getElementById("input-line").value;
        if ( username == "azizlahwar@gmail.com" && password == "formge"){
        alert ("Login successfully");
        window.location = "file:///C:/Users/DELL/Desktop/fffff/projet1.html"; // Redirecting to other page.
        return false;
        }
}