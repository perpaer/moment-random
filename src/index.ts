import moment, { type Moment, type MomentInput } from 'moment'

const randomNumber = (to: number, from = 0) =>
  Math.floor(Math.random() * (to - from) + from)

export default function momentRandom(
  end: MomentInput = moment(),
  start?: MomentInput,
): Moment {
  const endTime = moment(end).valueOf()

  if (start) {
    const startTime = moment(start).valueOf()
    if (startTime > endTime) {
      throw new Error('End date is before start date!')
    }
    return moment(randomNumber(endTime, startTime))
  }

  return moment(randomNumber(endTime))
}
