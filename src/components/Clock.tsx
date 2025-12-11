import { ClockProps, ClockRowProps } from '../types'

export default function Clock(props: ClockProps) {
    return (
        <div className="relative w-full">
            <div
                className="bg-[linear-gradient(to_bottom,#4a4a4a,#2b2b2b,#4a4a4a)] p-[30px] px-10
            rounded-[50px] [0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#555] flex justify-center items-center 
            relative"
            >
                <div className="flex gap-4 z-10">
                    {props.digits.slice().map((digit, index) => (
                        <ClockRow key={index} digit={digit} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ClockRow(props: ClockRowProps) {
    return (
        <>
            <div
                className="
            w-12 aspect-square flex-grow h-[50px] 
                bg-[#111] border-4 border-[#333] rounded-md 
                shadow-[inset_0_0_15px_#000] 
                flex justify-center items-center 
                text-xl font-bold relative 
                
                lg:w-[70px] lg:h-[70px] lg:flex-grow-0 
                lg:text-[2.5rem]
                "
            >
                <div
                    className="
                    text-[#e0e0e0] transition-transform duration-200
                    [text-shadow:1px_1px_0px_#555,2px_2px_0px_#444,3px_3px_0px_#333,4px_4px_5px_rgba(0,0,0,0.8)]
                "
                >
                    {props.digit}
                </div>
            </div>
        </>
    )
}
