import './App.css'
import EarthClock from './components/EarthClock'
import EridianClock from './components/EridianClock'
import { useEffect, useState } from 'react'
import { IDate } from './types'
import Header from './components/Header'

function getCurrentDate(): IDate {
    const now = new Date()

    return {
        year: now.getUTCFullYear(),
        month: now.getUTCMonth() + 1,
        day: now.getUTCDate(),
        hours: now.getUTCHours(),
        minutes: now.getUTCMinutes(),
        seconds: now.getUTCSeconds(),
    }
}

function App() {
    const [targetDate, setTargetDate] = useState<IDate>(getCurrentDate)

    useEffect(() => {
        const interval = setInterval(() => {
            setTargetDate(getCurrentDate())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
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
    )
}

export default App
