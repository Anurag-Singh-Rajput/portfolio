const express = require("express");
const axios = require("axios");
const emailjs = require("emailjs-com");
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/cfRatings", (req, response) => {
          axios.get("https://codeforces.com/api/user.info?handles=Anurag-Singh-Rajput#")
            .then(res => {
             response.send(res.data.result[0])
            })
            .catch(err => {
              console.log(err);
            })
  
  });

app.post("/send", (req, res) => {
console.log(req.body);

let formData = {
  userName: req.body.userName,
  userEmail: req.body.userEmail,
  message : req.body.message
};


emailjs.send(serviceId, tempId, formData, userId)
.then((result) => {
  alert("I got your message ✔");
}, (error) => {
    console.log(error.text);
});
});

app.listen(port, () => {
  console.log(`Server rocking on ${port}, buddy`);
});