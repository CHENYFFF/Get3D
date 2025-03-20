// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 邮件发送路由
app.post("/send-email", (req, res) => {
    const { fullName, email, company, topic, message } = req.body;

    // 使用 nodemailer 配置邮件发送
    const transporter = nodemailer.createTransport({
        service: 'gmail', // 使用 Gmail 服务
        auth: {
            user: 'your-email@gmail.com', // 你的 Gmail 地址
            pass: 'your-email-password' // 你的 Gmail 密码或应用密码
        }
    });

    const mailOptions = {
        from: email, // 发件人
        to: 'recipient-email@example.com', // 收件人
        subject: `New message from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\nTopic: ${topic}\nMessage: ${message}`
    };

    // 发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: "Error sending email", error });
        }
        res.status(200).send({ message: "Email sent successfully!" });
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
