import { useEffect, useState } from 'react'
import { secondsGenerator } from '../utils'

type Props = {
  timestamp: number
}
const useCounter = ({ timestamp }: Props) => {
  const [secondsPassed, setSecondsPassed] = useState(0)
  const [minutesPassed, setMinutesPassed] = useState('')
  const [hoursPassed, setHoursPassed] = useState('')
  const [daysPassed, setDaysPassed] = useState('')
  const [yearsPassed, setYearsPassed] = useState('')

  const secondsGen = secondsGenerator(timestamp)
  secondsGen.next()

  useEffect(() => {
    const interval = setInterval(() => {
      const value = secondsGen.next().value
      if (value) {
        const { seconds, minutes, hours, days, years } = value

        setSecondsPassed(seconds)
        setMinutesPassed(minutes)
        setHoursPassed(hours)
        setDaysPassed(days)
        setYearsPassed(years)
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  return { secondsPassed, minutesPassed, hoursPassed, daysPassed, yearsPassed }
}

export default useCounter
