import { useEffect, useRef, useState } from 'react'
import em from './../assets/em.jpg'
import x from './../assets/x.jpg'
import bkash from './../assets/bkash.gif'
import ReactConfetti from 'react-confetti';
import mp from '../assets/mp.mp3'

export default function HomePage() {
    const number = "01902517378"
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [state, setState] = useState(false);
    const [press, setPress] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    })
    const handleButtonClick = () => {
        setPress(true);
        if (audioRef.current) {
            audioRef.current.currentTime = 127; // start at 60 seconds
            audioRef.current.play();
        }
    }

    useEffect(() => {
        // Update window size on resize
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);

        // Set initial size immediately
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const copyNumber = () => {
        navigator.clipboard.writeText(number);
        setState(true);
        setTimeout(() => {
            setState(false)
        }, 3000);
    }


    return (
        <div className="min-h-screen w-screen flex justify-center items-center overflow-hidden"
            style={{
                backgroundImage: `url(${x})`,
                backgroundSize: "100% 120%",
            }}>
            {press && (
                <ReactConfetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={200}
                    gravity={0.3}
                    colors={['#FFB800', '#FF0000', '#00FFAA', '#00A0FF']}
                />
            )}
            <audio ref={audioRef} src={mp} loop />
            <div className='h-screen w-screen bg-transparent flex flex-col justify-center items-center'>
                <div className='relative flex flex-col w-[80%] h-[30%] bg-amber-100 rounded-2xl justify-center items-center md:w-[400px] md:h-[300px] md:bg-amber-100 md:flex md:flex-col md:justify-center md:items-center'>
                    <div className='w-[70%] flex  flex-col justify-center items-center'>
                        <h1 className='text-[19px] font-[poppins] font-bold'>" ঈদের চাঁদ আকাশে,</h1>
                        <h1 className='text-[19px] font-[poppins] font-bold'>সালামি দিন বিকাশে "</h1>
                    </div>
                    <div className='flex flex-row items-center gap-[5px] md:gap-[10px] w-[70%] justify-center'>
                        <img src={bkash} className='h-[50px] w-[50px] md:h-[80px] md:w-[80px]' />
                        <h1 className='text-[19px] font-[poppins] font-bold'>{number}</h1>
                        <button className='ml-[20px] bg-black py-[5px] px-[10px] rounded-lg' onClick={copyNumber}>
                            <h1 className='text-[13px] md:text-[15px] font-[poppins] font-medium text-white'>{state ? 'Copied' : 'Copy'}</h1>
                        </button>
                    </div>
                    <div
                        className='absolute bg-white top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl'
                        style={{ zIndex: press ? -20 : 20 }}
                    ></div>

                    <div
                        className='absolute top-0 left-0 w-full h-full flex items-center justify-center animate-pulse rounded-2xl'
                        style={{ zIndex: press ? -30 : 30 }}
                    >
                        <img src={em} className='w-full h-full block rounded-2xl object-contain' />
                    </div>
                </div>
                {
                    !press && (
                        <button className='bg-cyan-900 py-[10px] px-[20px] rounded-full mt-[30px] animate-bounce' onClick={handleButtonClick}>
                            <h1 className='text-[16px] text-white font-[poppins] font-bold'>ভিতরে কী আছে জানতে বক্সটি খুলুন 👀🎁</h1>
                        </button>
                    )
                }
            </div>

        </div>
    )
}