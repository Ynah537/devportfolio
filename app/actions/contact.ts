"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // This is Resend's test domain
      to: [process.env.YOUR_EMAIL || "your-email@example.com"], // Replace with your actual email
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${validatedData.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46;">
              <strong>Reply to:</strong> ${validatedData.email}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    // Send confirmation email to the person who contacted you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [validatedData.email],
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your message!</h2>
          
          <p>Hi ${validatedData.name},</p>
          
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong> ${validatedData.message.substring(0, 100)}${validatedData.message.length > 100 ? "..." : ""}</p>
          </div>
          
          <p>Best regards,<br>Your Name</p>
        </div>
      `,
    })

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
