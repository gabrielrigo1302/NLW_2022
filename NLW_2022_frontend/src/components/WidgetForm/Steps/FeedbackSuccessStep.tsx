import { CloseButton } from "../../CloseButton";
import success from "../../../assets/svg/Success.svg";

interface FeedbackSuccessStepProps {
    onResetFeedback: () => void;
}


export function FeedbackSuccessStep({ onResetFeedback }:FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[384px]">
                <img src={success} alt="Sucesso"/>
                
                <span className="text-xl mt-2">
                    Agradecemos o feedback!
                </span>


                <button 
                    type="button"
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors"
                    onClick={onResetFeedback}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}