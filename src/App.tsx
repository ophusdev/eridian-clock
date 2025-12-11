import './App.css'
import EarthClock from './components/EarthClock'
import EridianClock from './components/EridianClock'
import { useEffect, useState } from 'react'
import { IDate } from './types'
import Header from './components/Header'

function App() {
    const [targetDate, setTargetDate] = useState<IDate>({
        year: 0,
        month: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()

            setTargetDate({
                year: now.getUTCFullYear(),
                month: now.getUTCMonth(),
                day: now.getUTCDate(),
                hours: now.getUTCHours(),
                minutes: now.getUTCMinutes(),
                seconds: now.getUTCSeconds(),
            })
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <>
            <div className="container">
                <div className="justify-center items-center">
                    <Header></Header>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                    <div className="w-full lg:w-1/2 p-4 rounded-lg">
                        <EarthClock {...targetDate}></EarthClock>
                    </div>

                    <div className="w-full lg:w-full p-4 rounded-lg">
                        <EridianClock {...targetDate}></EridianClock>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
