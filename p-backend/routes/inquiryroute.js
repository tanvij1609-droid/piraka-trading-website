const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/inquiry", async (req, res) => {
  console.log(req.body);
  try {
    const { name, phone, email, message } = req.body;

    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      message
    });

    await newInquiry.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: "New Inquiry Received",

      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(201).json({ success: true, message: "Inquiry saved" });
  } 
    catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
});



module.exports = router;