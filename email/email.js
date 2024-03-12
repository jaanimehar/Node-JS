var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'betsy.mayert@ethereal.email',
    pass: '3aRHWWMbV8CGWwJBA8'
  }
});

var mailOptions = {
  from: 'betsy.mayert@ethereal.email',
  to: 'harrysaif675@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is a mail from my side.'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});