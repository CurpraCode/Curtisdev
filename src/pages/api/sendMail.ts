// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
type ReqData = {
  to?: string;
  from?: string;
  subject?: string;
  text?: string;
  html?: string;
};
type Data = {
  errorMessage: string;
  successMessage: string;
};
const sendEmail = async (options: any) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const msg: MailDataRequired = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM || "",
    subject: options.subject,
    text: options.text,
    html: options.html,
  };
  await sgMail.send(msg);
};

console.log(
  process.env.SENDGRID_API_KEY,
  process.env.EMAIL_TO,
  process.env.EMAIL_FROM
);
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;
  const dataVal = req.body;
  console.log(dataVal);
  const text = `${message}`;
  const html = `       
  <body>
      <div>
          <h2>
              ${name}
          </h2>
          <a class="email" href="mailto:${email}" target="_blank"
          style="text-decoration: none">
              ${email}
          </a>
          <p class="message">
             ${message}
          </p>
      </div>
  </body>
  `;
  try {
    await sendEmail(req.body);
    console.log(req.body);
    res.status(200).json({
      successMessage: "John Doe",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errorMessage: "Error sending mail",
    });
  }
};
export default handler;
