import { createTransport } from "nodemailer";
//using nodemailer to send mail for resetting password
//creating transport
export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "fullstackpurpose@gmail.com",
    pass: "dmuh pnrp ajxi pdtk",
  },
});

