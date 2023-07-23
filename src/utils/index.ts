export function getCurrentDateInfo() {
  const timestamp = Date.now() // Get the current timestamp in milliseconds

  // Get the year only
  const currentDate = new Date(timestamp)
  const year = currentDate.getFullYear().toString()

  return {
    year,
    timestamp,
  }
}

function roundNumber(number: number) {
  const decimalPart = number % 1
  if (decimalPart >= 0.5) {
    return Math.ceil(number)
  } else {
    return Math.floor(number)
  }
}

export function* secondsGenerator(timestamp: number) {
  while (true) {
    const currentDate = Date.now()
    const seconds = roundNumber(currentDate / 1000 - timestamp / 1000)
    const minutes = (seconds / 60).toFixed(3) // Minutes passed (rounded to 3 decimal places)
    const hours = (seconds / 3600).toFixed(3)
    const days = (seconds / 86400).toFixed(3) // Days passed (rounded to 3 decimal places)
    const years = (seconds / 31536000).toFixed(3) // Years passed (rounded to 3 decimal places)
    yield {
      seconds,
      minutes,
      hours,
      days,
      years,
    }
  }
}

export function formatDateToDDMMYYYY(timestamp: number) {
  const date = new Date(timestamp)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return {
    date: `${day}/${month}/${year}`,
    time: `${hours}:${minutes}:${seconds}`,
  }
}
