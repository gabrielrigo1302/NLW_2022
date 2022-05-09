import { MailAdapter } from "../adapters/email-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor (
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}
    
    async execute({type, comment, screenshot}: SubmitFeedbackUseCaseRequest) {
        if (!type) {
            throw new Error('Type can\'t be empty')
        }

        if (!comment) {
            throw new Error('Comment can\'t be empty')
        }
        
        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }
        
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style="font-family; sans-serif; font-size: 16px; color: #111;"`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src='${screenshot}'/>` : '',
                `</div>`
            ].join('\n')
        })
    }
}