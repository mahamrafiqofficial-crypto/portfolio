const nodemailer = require('nodemailer');

const sendEmailController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).send({
                success: false,
                message: 'Please provide name, email and message'
            });
        }

        // Transporter setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Mail options
        const mailOptions = {
            from: email,
            to: process.env.TO_EMAIL,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h2>New Message from Portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).send({
            success: true,
            message: 'Your Message Sent Successfully!',
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Email Send Error',
            error,
        });
    }
};

module.exports = { sendEmailController };