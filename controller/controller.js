const nodemailer = require("nodemailer")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: path.resolve(__dirname, '../.env') });

exports.index = async (req, res) => {
    res.render("index", { title: "Home Page"})
}


const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });


exports.submit = async(req, res) => {
    const full_name = req.body.fulln;
    const email = req.body.email;
    const message = req.body.message;

    console.log("These things=======",full_name, email, message)

    const messages = `
    <p><strong>Name:</strong> ${full_name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
`
      const mailOptions = {
        from: process.env.AUTH_EMAIL, 
        replyTo: email,  // Set the reply-to to the user's email
        to: process.env.EMAIL,
        subject: "Customer Contact To Alex Private Hire",
        html: messages
      }
    transport.sendMail(mailOptions,function(error, info){
      if (error) {
        return res.json({ error: 'Failed to send email. Please try again later.' });
    } else {
        return res.json({ success: 'Email sent successfully!' });
    }
    })
}