"use server"

import nodemailer from "nodemailer"

interface EmailData {
  to: string
  subject: string
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const { to, subject, name, email, message } = data

  try {
    // Check if environment variables are set
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPass) {
      console.error("Email environment variables are not set")
      throw new Error("Email configuration is missing")
    }

    // Create a transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false, // Helps with some connection issues
      },
    })

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Message from Portfolio Contact Form</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #777; font-size: 12px; text-align: center; margin-top: 30px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    }

    // Verify connection configuration
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error("Transporter verification error:", error)
          reject(error)
        } else {
          console.log("Server is ready to take our messages")
          resolve(success)
        }
      })
    })

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error(`Failed to send email: ${error.message}`)
  }
}

