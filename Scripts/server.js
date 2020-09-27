
require('dotenv').config();

const nodemailer = require("nodemailer");

//Step1 -> Transporter, connects you to which ever host domain the client is using/services.

//transporter takes an object of host config
let transporter = nodemailer.createTransport({
  //domain
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//step 2.
//Things we would like to send to our mail. Everything we need to send to use.

let mailOptions = {
  from: "info.sibawaih@gmail.com",
  to: "Sirajmotaung@gmail.com",
  subject: "Testing and Testing",
  text: "It works",
};

//Step 3

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error occurs");
  } else {
    console.log("Email sent!!!");
  }
});
