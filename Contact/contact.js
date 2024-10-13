function sendMail(){
    var params = {
        name:document.getElementById("#name").value ,
        email:document.getElementById("#email").value ,
        subject:document.getElementById("#subject").value ,
        message:document.getElementById("#message").value,

    };
    const serviceID ="service_j1m9wtj";
    const templateID ="template_9mpr9rd"; 
    emailjs
    .send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("votre message a été envoyé avec succès");

           
        }
    )
    .catch((err)=> console.log(err));
}


   
