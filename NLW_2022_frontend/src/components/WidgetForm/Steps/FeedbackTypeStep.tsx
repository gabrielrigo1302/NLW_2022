import { FeedbackType, feedbackTypes } from "../../../types/feedbackTypes"
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
    return(
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                    <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">
            {
                Object.entries(feedbackTypes).map(([key, feedbackType]) => {
                    return(
                        <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-brand-hover focus:border-brand-brand-hover focus:outline-none"
                        onClick={() => {
                            onFeedbackTypeChange(key as FeedbackType)
                        }}
                        >
                            <img src={feedbackType.image.source} alt={feedbackType.image.alt}/>
                            <span>{feedbackType.title}</span>
                        </button>
                    )
                })
            }
        </div>
    </>
    )
}