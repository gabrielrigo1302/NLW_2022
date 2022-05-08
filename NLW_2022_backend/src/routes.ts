import nodemailer from 'nodemailer';
import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './respositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "22e6cda8440e28",
      pass: "43b5488963d221"
    }
  });

routes.post('/users', async (req, res) => {
    const {
        type,
        comment,
        screenshot
    } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository);

    await submitFeedbackUseCase.execute({
        type, 
        comment, 
        screenshot
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gabriel Rigo <gabrieloliveirarigo13@gmail.com',
        subject: 'Novo Feedback',
        html: [
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
        ].join('\n')
    })

    return res.status(201).send();
})
