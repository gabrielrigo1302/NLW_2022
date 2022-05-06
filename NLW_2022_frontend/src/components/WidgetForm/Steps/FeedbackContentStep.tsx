import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "../../../types/feedbackTypes"
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
    onResetFeedback: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
    feedbackType, 
    onResetFeedback,
    onFeedbackSent
}: FeedbackTypeStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null) 
    const [comment, setComment] = useState<string>('')
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    
    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenshot,
            comment
        });

        onFeedbackSent();
    }

    return(
        <>
            <header>
                <button onClick={onResetFeedback} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}/>        
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton/>
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-brand focus:ring-1 focus:ring-brand-brand resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    placeholder="Conte com detalhes o que está acontecendo"
                    onChange={event => setComment(event.target.value)}
                />
            
                <footer className="flex gap-2 mt-4 mb-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type='submit'
                        className="p-2 bg-brand-brand rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-brand-hover focus:outline-none focus:ring-offset-zinc-900 focus:ring-brand-brand transition-colors disabled:opacity-50 disabled:bg-brand-brand"
                        disabled={comment.length === 0}
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>

        </>
    )
}