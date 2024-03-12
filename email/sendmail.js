const nodemialer = require("nodemailer");

const transporter = nodemialer.createTransport({

    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "mylene.nienow@ethereal.email",
        pass: "NPWbHY9NuC6RmDUgaF"

    }
});

const mailoption= {
    from:"mylene.nienow@ethereal.email",
    to:"harrysaif675@gmail.com",
    subject:"Node email",
    text:"This is my first email creating by use of node."
}

transporter.sendMail(mailoption,(error,info)=>{
    if (error) {
        console.log(error);
        
    }
    else{
        console.log("email is sending"+ info.response);
    }

});