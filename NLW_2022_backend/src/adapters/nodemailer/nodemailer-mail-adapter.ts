import { MailAdapter, SendMailData } from "../email-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "22e6cda8440e28",
      pass: "43b5488963d221"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Rigo <gabrieloliveirarigo13@gmail.com',
            subject,
            html: body
        })
    };
}