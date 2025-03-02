const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Required for allowing cross origin requests.
const fs = require('fs'); //For file storage.

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail'
  auth: {
    user: 'growsphere.services@gmail.com',
    pass: 'Growwithus@2025',
  },
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Send email
  const mailOptions = {
    from: 'your_email@example.com',
    to: 'your_receiving_email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);

    // Store data (example: append to a file)
    const data = `Name: ${name}, Email: ${email}, Message: ${message}\n`;
    fs.appendFile('contact_data.txt', data, (err) => {
      if (err) {
        console.error('Error storing data:', err);
      } else {
        console.log('Data stored successfully');
      }
    });

    res.send('Email sent and data stored successfully');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});