import { useState } from "react"
import { FeedbackType } from "../../types/feedbackTypes"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false)
    
    const handleRestartFeedback = () => {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onResetFeedback={handleRestartFeedback}/>
            ) : (
                <>
                    {feedbackType ? (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onResetFeedback={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        /> ) : (
                            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
                        )                       
                    }
                </>
            )}

            <footer className="text-xs text-dark-text-secondary">
                Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
            </footer>
        </div>
    )
}