const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const axios = require("axios");

router.post("/inquiry", async (req, res) => {
  console.log(req.body);

  try {
    const { name, phone, email, message } = req.body;

    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      message,
    });

    await newInquiry.save();

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Piraka Trading Company",
          email: process.env.EMAIL_USER,
        },

        to: [
          {
            email: process.env.EMAIL_USER,
          },
        ],

        subject: "New Inquiry Received",

        htmlContent: `
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      },

      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    res.status(201).json({
      success: true,
      message: "Inquiry saved",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;