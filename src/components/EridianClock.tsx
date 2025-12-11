import { useEffect, useMemo, useState } from 'react'
import Clock from './Clock'
import ClockHeader from './ClockHeader'
import ClockFooter from './ClockFooter'
import { IDate } from '../types'
import EridianTimeConverter, {
    EridianTime,
} from '../classes/EridianTimeConverter'
import HumanTimeConverter from '../classes/HumanTimeConverter'

export default function EridianClock(dateObject: IDate) {
    const eridianConverter = useMemo(() => new EridianTimeConverter(), [])
    const humanConverter = useMemo(() => new HumanTimeConverter(), [])
    const initialDigits: string[] = Array(5).fill(
        eridianConverter.defaultSymbol()
    )

    const [year, setYear] = useState<string>(eridianConverter.defaultSymbol())
    const [month, setMonth] = useState<string>(eridianConverter.defaultSymbol())
    const [day, setDay] = useState<string>(eridianConverter.defaultSymbol())
    const [digits, setDigits] = useState<string[]>(initialDigits)

    useEffect(() => {
        const updateClock = () => {
            setYear(
                eridianConverter.singleNumberToEridianString(dateObject.year)
            )
            setMonth(
                eridianConverter.singleNumberToEridianString(dateObject.month)
            )
            setDay(eridianConverter.singleNumberToEridianString(dateObject.day))

            let hours = dateObject.hours + 1

            let secondsFromMidnight =
                humanConverter.calculateSecondsSinceMidnight(
                    new Date(
                        dateObject.year,
                        dateObject.month,
                        dateObject.day,
                        hours,
                        dateObject.minutes,
                        dateObject.seconds
                    )
                )

            const eridianTime: EridianTime =
                eridianConverter.compareHumanDateToEridianDate(
                    secondsFromMidnight
                )

            setDigits(eridianTime.eridianDigits)
        }

        updateClock()
    }, [dateObject, eridianConverter, humanConverter])

    return (
        <>
            <ClockHeader
                label="Eridian Date (Base 6)"
                year={year}
                month={month}
                day={day}
            />

            <Clock digits={digits}></Clock>

            <ClockFooter
                label="Eridian Time"
                stats="1 Tick = 2.366 Earth Secs"
            />
        </>
    )
}
