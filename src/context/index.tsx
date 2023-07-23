import { createContext, useMemo } from 'react'
import { getCurrentDateInfo } from '../utils'

const INITIAL_VALUE = {
  year: '',
  timestamp: 0,
}

export const DateContext = createContext(INITIAL_VALUE)

type Props = {
  children: React.JSX.Element
}
const DateProvider = ({ children }: Props) => {
  const { year, timestamp } = useMemo(() => getCurrentDateInfo(), [])

  return (
    <DateContext.Provider
      value={{
        year,
        timestamp,
      }}
    >
      {children}
    </DateContext.Provider>
  )
}

export default DateProvider
