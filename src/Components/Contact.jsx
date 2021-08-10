import React from "react";

function ContactCard(){
    return (
        <section className = "contact-section">
            <h1>You want to talk ?</h1>
            <form className = "form-container">
                <label >Name : </label>
                <input type="text"  placeholder="Enter email"/>
                <label >Email address</label>
                <input type="email"placeholder="Enter email"/>
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactCard;