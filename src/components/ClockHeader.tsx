import { ClockHeaderProps } from '../types'

export default function ClockHeader(props: ClockHeaderProps) {
    return (
        <>
            <div className="clock-date-container">
                <div className="clock-date-label">{props.label}</div>
                <div className="clock-date" id="clock-date-display">
                    {props.year}/{props.month}/{props.day}
                </div>
            </div>
        </>
    )
}
