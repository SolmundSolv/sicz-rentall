import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const confirmOrder = async (req: NextApiRequest, res: NextApiResponse) => {
    let items = "";
    req.body.items.map((i, index) => (items += `${index + 1}. ${i.name}\n`));
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "konradqxd@gmail.com",
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        from: req.body.email,
        to: "prokop.k99@gmail.com",
        subject: `Message from ${req.body.company}: ${req.body.name} ${req.body.email}`,
        text: items,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send("error");
        } else {
            console.log("Email sent: " + info.response);
            res.send("success");
        }
    });
    //TODO: add record to db
};

export default confirmOrder;
