import moment from 'moment'
import { describe, expect, test } from 'vitest'
import random from './index'

const isProperDate = (
  date: moment.Moment,
  from: moment.MomentInput,
  to: moment.MomentInput,
) => date.isAfter(from) && date.isBefore(to)

describe('moment-random', () => {
  test('should be defined', () => {
    expect(random).toBeTruthy()
  })

  test('should return a moment object', () => {
    const date = random()
    expect(moment.isMoment(date)).toBeTruthy()
  })

  test('should return a date in the past by default', () => {
    const now = Date.now()
    const date = random()
    expect(date.valueOf()).toBeGreaterThanOrEqual(0)
    expect(date.valueOf()).toBeLessThanOrEqual(now)
  })

  test('should throw error when start > end', () => {
    expect(() =>
      random(new Date('2000-01-01'), new Date('2001-01-01')),
    ).toThrow(Error)
  })

  test('should return a proper moment object in interval of time', () => {
    const date = random(new Date('2001-01-01'), new Date('2000-01-01'))
    expect(isProperDate(date, '2000-01-01', '2001-01-01')).toBeTruthy()
  })

  test('should return a proper moment object with random stuff in arguments', () => {
    const date = random('20130208', moment('12-25-1995', 'MM-DD-YYYY'))

    expect(moment.isMoment(date)).toBeTruthy()
    expect(isProperDate(date, '1995-12-25', '2013-02-08')).toBeTruthy()
  })

  test('should return start when start equals end', () => {
    const date = random('2020-06-15', '2020-06-15')
    expect(date.isSame('2020-06-15')).toBeTruthy()
  })

  test('should stay within bounds across many runs', () => {
    const start = moment('2010-01-01')
    const end = moment('2010-01-02')
    for (let i = 0; i < 1000; i++) {
      const date = random(end, start)
      expect(date.valueOf()).toBeGreaterThanOrEqual(start.valueOf())
      expect(date.valueOf()).toBeLessThan(end.valueOf())
    }
  })
})
