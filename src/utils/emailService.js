const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendVerificationEmail = async (email, token) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        html: `<p>Click <a href="${process.env.BASE_URL}/verify-email?token=${token}">here</a> to verify your email.</p>`,
    };

    await transporter.sendMail(mailOptions);
};