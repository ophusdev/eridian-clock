import EridianTimeConverter from './EridianTimeConverter'
import HumanTimeConverter from './HumanTimeConverter'

test('compare 2025 year', () => {
    const converter = new EridianTimeConverter()
    let number = 2025
    let yearBase6 = converter.toBase6(number)

    let year = converter.toEridianString(yearBase6)
    let yearDigits = converter.toEridianDigits(yearBase6)

    expect(year).toEqual('IλVIλ')
    expect(yearDigits).toEqual(['I', 'λ', 'V', 'I', 'λ'])
})

test('compare 7200 seconds', () => {
    const converter = new EridianTimeConverter()
    let number = Math.floor(7200 / 2.366) // this is a number and need to be converted to Eridian ticks
    let yearBase6 = converter.toBase6(number)
    let yearDigits = converter.toEridianDigits(yearBase6)

    expect(yearDigits).toEqual(['V', 'V', 'ℓ', 'λ', 'I'])
})

test('compare midnight', () => {
    const eridianConverter = new EridianTimeConverter()
    const humanConverter = new HumanTimeConverter()

    const targetDate = new Date('2025-12-11 00:00:00 UTC')

    const humanTime = humanConverter.calculateSecondsSinceMidnight(targetDate)

    const eridianTime =
        eridianConverter.compareHumanDateToEridianDate(humanTime)

    expect(eridianTime.eridianTime).toEqual('ℓℓℓℓℓ')
})

test('compare 23:59:59', () => {
    const eridianConverter = new EridianTimeConverter()
    const humanConverter = new HumanTimeConverter()

    const targetDate = new Date('2025-12-11 23:59:59 UTC')

    const humanTime = humanConverter.calculateSecondsSinceMidnight(targetDate)
    const eridianTime =
        eridianConverter.compareHumanDateToEridianDate(humanTime)

    expect(eridianTime.eridianTime).toEqual('+IℓVV')
})
