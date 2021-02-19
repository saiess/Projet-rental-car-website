function loader() {
  document.querySelector(".loadergif").style.display = "none";
  document.querySelector(".loadergif").style.transition = "2s";
  document.querySelector(".header").style.display = "block";
  document.querySelector(".section").style.display = "block";
}
// document.body.addEventListener(onload,loader);

function validation_contact() {
  //                 var vaEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  var username = document.getElementById("Username").value;
  var email = document.getElementById("E_Mail").value;
  var phone = document.getElementById("Phone_Number").value;
  var sujet = document.getElementById("Sujet").value;
  var message = document.getElementById("Message").value;

  if (username == "" || Username.length < 4) {
    alert("enter your nom");
    return false;
  }
  if(email==""){
      alert("enter your Email");
      return false;
  }
  if(phone==""){
    alert("enter your Email");
    return false;
}
  if(Sujet==""){
      alert("enter your Sujet");
      return false;
  }
  if(message=="" || message.length<10){
      alert("enter your message");
      return false;
  }

  alert(username+" "+email+" "+phone+" "+sujet+" "+message);
}

// ------------------javascript for bookin---------------------
var type;

function choix(e) {
    type = e;
    var a=document.getElementsByName('radio');
    for(var i=0;i<a.length;i++){
        a[i].disabled = true;
    }


    var b=document.getElementsByName('gear');
    for(var i=0;i<b.length;i++){
        b[i].disabled = true;
    }


    switch (type) {
        case "moto": document.querySelector("#essence").disabled = false;
                     document.querySelector("#electrique").disabled = false;
        break;
        

        case "compact": document.querySelector("#manual").disabled = false;
                        document.querySelector("#hybride").disabled = false;
                        document.querySelector("#essence").disabled = false;
                        document.querySelector("#diesel").disabled = false;
        break;


        case "citadine": document.querySelector("#manual").disabled = false;
                         document.querySelector("#electrique").disabled = false;
                         document.querySelector("#hybride").disabled = false;
                         document.querySelector("#essence").disabled = false;
                         document.querySelector("#diesel").disabled = false;
        break;


        case "utilitaire": document.querySelector("#manual").disabled = false;
                           document.querySelector("#diesel").disabled = false;
        break;

        case "berlin": document.querySelector("#automatic").disabled = false;
                       document.querySelector("#hybride").disabled = false;
                       document.querySelector("#essence").disabled = false;
                       document.querySelector("#diesel").disabled = false;
        break;

        case "truck": document.querySelector("#automatic").disabled = false;
                      document.querySelector("#diesel").disabled = false;
        break;

        case "cm": document.querySelector("#manual").disabled = false;
                   document.querySelector("#diesel").disabled = false;
                   document.querySelector("#essence").disabled = false;
        break;
        
    }


}