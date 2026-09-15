export default class HumanTimeConverter {
    calculateSecondsSinceMidnight(targetDate: Date) {
        const midnight = Date.UTC(
            targetDate.getUTCFullYear(),
            targetDate.getUTCMonth(),
            targetDate.getUTCDate()
        )

        const msSinceMidnight = targetDate.getTime() - midnight

        const secondsSinceMidnight = msSinceMidnight / 1000

        return secondsSinceMidnight
    }
}
