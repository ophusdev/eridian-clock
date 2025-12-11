// Define the eridian time system constants
const EARTH_SECONDS_IN_ERIDIAN_DAY = 18397.44
const BASE_6_UNITS_IN_ERIDIAN_DAY = 7776
const EARTH_SECONDS_PER_ERIDIAN_UNIT =
    EARTH_SECONDS_IN_ERIDIAN_DAY / BASE_6_UNITS_IN_ERIDIAN_DAY

// Define the alien numerals for base-6 digits
const ERIDIAN_SYMBOLS = ['ℓ', 'I', 'V', 'λ', '+', '∀']

export interface EridianTime {
    earthSeconds: number
    eridianUnits: number
    eridianTime: string
    eridianDigits: string[]
}

export default class EridianTimeConverter {
    defaultSymbol() {
        return ERIDIAN_SYMBOLS[0]
    }

    toEridianNumeral(digit: number) {
        if (digit < 0 || digit > 5) {
            throw new Error(`Invalid base-6 digit: ${digit}`)
        }
        return ERIDIAN_SYMBOLS[digit]
    }

    toBase6(number: number, padding: number = 0) {
        const maxUnits = BASE_6_UNITS_IN_ERIDIAN_DAY - 1

        if (number < 0 || number > maxUnits) {
            throw new Error(
                `Input value ${number} is outside the alien day range (0 to 7775).`
            )
        }

        let base6String = number.toString(6)

        if (padding > 0) {
            while (base6String.length <= 4) {
                base6String = '0' + base6String
            }
        }

        return base6String
    }

    _convertDigits(digit: string) {
        const d = parseInt(digit, 10)
        return this.toEridianNumeral(d)
    }

    toEridianString(base6TimeStr: string) {
        return this.toEridianDigits(base6TimeStr).join('')
    }

    toEridianDigits(base6TimeStr: string) {
        let alienTimeStr: string[] = []

        for (const digitChar of base6TimeStr) {
            alienTimeStr.push(this._convertDigits(digitChar))
        }

        return alienTimeStr
    }

    singleNumberToEridianString(number: number) {
        let base6Number = this.toBase6(number)
        return this.toEridianString(base6Number)
    }

    compareHumanDateToEridianDate(earthSecondsSinceMidnight: number) {
        const seconds = earthSecondsSinceMidnight % EARTH_SECONDS_IN_ERIDIAN_DAY
        const eridianUnits = Math.floor(
            seconds / EARTH_SECONDS_PER_ERIDIAN_UNIT
        )
        const base6TimeStr = this.toBase6(eridianUnits, 5)

        return {
            earthSeconds: seconds,
            eridianUnits: eridianUnits,
            eridianTime: this.toEridianString(base6TimeStr),
            eridianDigits: this.toEridianDigits(base6TimeStr),
        }
    }
}
