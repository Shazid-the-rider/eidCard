import { useEffect, useState } from 'react'
import eid from './../assets/eid.jpg'
import x from './../assets/x.jpg'
import ReactConfetti from 'react-confetti';

export default function HomePage() {
    const number = "01902517378"
    const [state, setState] = useState(false);
    const [press, setPress] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    })

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

    const PressBtn = () => {
        setPress(true);
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
            <div className='h-full w-full flex justify-center items-center flex-col gap-12 md:gap-20'>
                <div className='relative bg-amber-100 gap-10 md:gap-[20px] h-[50%] sm:h-[55%] md:h-[40%] w-[90%] sm:w-[70%] md:w-[40%] flex flex-col items-center justify-center rounded-3xl shadow-lg shadow-gray-200 p-4 sm:p-6'>
                    <div className='text-center'>
                        <h1 className='text-[20px] sm:text-[22px] md:text-[22px] font-[poppins]'>" ঈদের চাঁদ আকাশে</h1>
                        <h1 className='text-[20px] sm:text-[22px] md:text-[22px] font-[poppins]'>সালামি দিন বিকাশে 🌙 "</h1>
                    </div>
                    <div className='flex flex-row gap-4 sm:gap-6 md:gap-[10px] items-center mt-2 sm:mt-4'>
                        <h1 className='text-[18px] sm:text-[20px] md:text-[25px] font-[poppins] font-medium'>{number}</h1>
                        <button
                            onClick={copyNumber}
                            className="text-sm sm:text-base md:text-xl hover:scale-110 transition h-8 sm:h-10 md:h-[30px] w-20 sm:w-24 md:w-[90px] bg-black rounded-2xl flex items-center justify-center"
                        >
                            <h1 className='text-white font-[poppins] font-medium'>{state ? 'Copied' : 'Copy'}</h1>
                        </button>
                    </div>

                    <div className='h-full w-full absolute bg-black top-0 left-0 z-30 rounded-3xl flex flex-col items-center justify-center'
                        style={{
                            zIndex: press ? -30 : 30,
                        }}
                    ></div>

                    <div className='h-full w-full absolute top-0 left-0 z-40 rounded-3xl flex flex-col items-center justify-center animate-pulse'
                        style={{
                            backgroundImage: `url(${eid})`,
                            backgroundSize: "100% 120%",
                            zIndex: press ? -30 : 40,
                        }}>
                    </div>
                </div>

                {
                    !press && (
                        <button className='bg-gray-700 h-12 sm:h-14 md:h-[50px] w-72 sm:w-80 md:w-[300px] rounded-3xl animate-bounce flex items-center justify-center' onClick={() => PressBtn()}>
                            <h1 className='font-[poppins] text-[16px] sm:text-[18px] md:text-[20px] font-medium text-white'>কার্ডটি খুলুন 🌙</h1>
                        </button>
                    )
                }
            </div>
        </div>
    )
}