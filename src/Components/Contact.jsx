import React from "react";

function ContactCard(){
    return (
        <div class="form">
  <div class="row">
    <div class="col-lg-6 form-left">
      <h3>Hi name.</h3>
      <p>I love to talk about web series, anime, coding? What you got?</p>
    </div>
    <div class="col-lg-6 form-right">
          <form action="success.html" class="form-class" method="">
              <img class="mb-4 contact-img" src="https://media.giphy.com/media/rWLXay3IYwyeQL1Pkn/giphy.gif" alt="msg-img" width="120"
                  height="120" />
              <input type="text" class="form-control top" placeholder="Name" required autofocus/>
              <input type="email" class="form-control middle" placeholder="Email" required/>
              <textarea type="text" class="form-control bottom" placeholder="Got something to say ?" required/>
      
              <button class="submit-btn"><a class="submit-btn" href="success.html">Submit</a></button>
          </form>
        
    </div>
  </div>
  
</div>
    );
}

export default ContactCard;