import {SubmitFeedbackUseCase} from '../use-cases/submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('should not be able to submit a feedback when screenshot wrong formatted', async () => {
        await expect(submitFeedback.execute({
            type: 'type',
            comment: 'comment',
            screenshot: 'test/screenshot'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: 'type',
            comment: '',
            screenshot: 'data:image/png;base64/screenshot'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'comment',
            screenshot: 'data:image/png;base64/screenshot'
        })).rejects.toThrow();
    })

    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'type',
            comment: 'comment',
            screenshot: 'data:image/png;base64/screenshot'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })
})