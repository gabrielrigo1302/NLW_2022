import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from './Loading';

interface ScreenshotButtonProps {
    screenshot: string|null;
    onScreenshotTook: (screenshot: string|null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64 = canvas.toDataURL('image/png');

        onScreenshotTook(base64);
        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return(
            <button
                type='button'
                className='p-1 w-16 h-16 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 100
                }}
            >
                <Trash 
                    weight='bold'  
                    onClick={() => onScreenshotTook(null)}
                />
            </button>
        )
    }

    return (
        <button
            type='button'
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-offset-zinc-900 focus:ring-brand-brand transition-colors"
            onClick={() => handleTakeScreenshot()}
        >
            {isTakingScreenshot ? <Loading/> : <Camera className="m-4 h-4"/>}
        </button>
    )
}