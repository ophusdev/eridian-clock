export default class HumanTimeConverter {
    calculateSecondsSinceMidnight(targetDate: Date) {
        const midnight = new Date(
            targetDate.getUTCFullYear(),
            targetDate.getUTCMonth(),
            targetDate.getUTCDate(),
            1, //need midnight
            0,
            0
        )

        const msSinceMidnight = targetDate.getTime() - midnight.getTime()

        const secondsSinceMidnight = msSinceMidnight / 1000

        return secondsSinceMidnight
    }
}
