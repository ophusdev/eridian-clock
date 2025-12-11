export interface IDate {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
}

export interface ClockProps {
    digits: string[]
}

export interface ClockHeaderProps {
    label: string
    year: string
    month: string
    day: string
}

export interface ClockFooterProps {
    label: string
    stats: string
}

export interface ClockRowProps {
    digit: string
}
