function SubmitForm(event){
    event.preventDefault();
    let email=document.getElementById("email")
    if(email.value){
        alert("alert need email");

    } else{
        alert("wrong try again")
    }  
}