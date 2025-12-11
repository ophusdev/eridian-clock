import { ClockFooterProps } from '../types'

export default function ClockFooter(props: ClockFooterProps) {
    return (
        <>
            <div className="text-center mt-4 text-[#d86c6c] text-base tracking-widest uppercase">
                {props.label}{' '}
            </div>
            <div className="mt-2.5 text-sm text-center text-[#888]">
                {props.stats}
            </div>
        </>
    )
}
