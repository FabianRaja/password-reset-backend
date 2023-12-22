import { createTransport } from "nodemailer";

//creating transport
export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "fullstackpurpose@gmail.com",
    pass: "dmuh pnrp ajxi pdtk",
  },
});

