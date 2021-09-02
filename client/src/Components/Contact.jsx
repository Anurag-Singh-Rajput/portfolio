import React, { useState } from "react";
import emailjs from "emailjs-com";
function ContactCard(){
  const[name, setName] = useState("");

  function handleChange(event){
    const newName = event.target.value;
    console.log(newName);
    setName(newName);
  }

// -----------------PRIVATE DATA :: Remove Later ------------------
 
  //  -------------------------------------------------------------

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, tempId, e.target, userId)
      .then((result) => {
        alert("I got your message ✔");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setName("");
  }

    return (
        <div class="form">
  <div class="row">
    <div class="col-lg-6 form-left">
      <h3>Hi {name}</h3>
      <p>I love to talk about web series, anime, coding? What you got?</p>
    </div>
    <div class="col-lg-6 form-right">
          <form class="form-class" onSubmit = {sendEmail}>
              <img class="mb-4 contact-img" src="https://media.giphy.com/media/rWLXay3IYwyeQL1Pkn/giphy.gif" alt="msg-img" width="120"
                  height="120" />
              <input type="text" class="form-control top" placeholder="Name" onChange = {handleChange} name = "userName" autocomplete="off" value = {name} required />
              <input type="email" class="form-control middle" placeholder="Email" name = "userEmail" autocomplete="off" required/>
              <textarea type="text" class="form-control bottom" placeholder="Got something to say ?" name = "message" autocomplete="off" required/>
      
              <button class="submit-btn" type = "submit">Submit</button>
          </form>
        
    </div>
  </div>
  
</div>
    );
}

export default ContactCard;