import { useEffect, useState } from 'react'
import ClockHeader from './ClockHeader'
import ClockFooter from './ClockFooter'
import { IDate } from '../types'

export default function EarthClock(props: IDate) {
    const [year, setYear] = useState<string>('0')
    const [month, setMonth] = useState<string>('0')
    const [day, setDay] = useState<string>('0')

    const initialDigits: string = '00:00:00'
    const [digits, setDigits] = useState<string>(initialDigits)

    useEffect(() => {
        const updateClock = () => {
            const dateObject = props

            const hours = dateObject.hours.toString().padStart(2, '0')
            const minutes = dateObject.minutes.toString().padStart(2, '0')
            const seconds = dateObject.seconds.toString().padStart(2, '0')

            let paddedString = hours + ':' + minutes + ':' + seconds

            setDigits(paddedString)

            setYear(dateObject.year.toString())
            setMonth(dateObject.month.toString())
            setDay(dateObject.day.toString().padStart(2, '0'))
        }

        updateClock()
    }, [props])

    return (
        <>
            <ClockHeader
                label={'Earth Date (UTC +0)'}
                year={year}
                month={month}
                day={day}
            ></ClockHeader>

            <div className="w-full">
                <div
                    className="bg-[linear-gradient(to_bottom,#4a4a4a,#2b2b2b,#4a4a4a)] p-[30px] px-10
            rounded-[50px] [0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#555] flex justify-center items-center 
            relative"
                >
                    <div className="flex gap-4 z-10">
                        <div
                            className="flex-grow h-[35px] 
                flex justify-center items-center 
                text-xl font-bold relative 
                
                lg:w-[70px] lg:h-[70px] lg:flex-grow-0 
                lg:text-[2.5rem]"
                        >
                            {digits}
                        </div>
                    </div>
                </div>
            </div>

            <ClockFooter label="Earth Time" stats="1 Tick = 1 Earth Secs" />
        </>
    )
}
