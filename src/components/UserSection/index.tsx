import { Heading, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { DateContext } from '../../context'
import useCounter from '../../hooks/useCounter'
import Card from '../Card'
import Counter from '../Counter'
import Section from '../Section'

const UserSection = () => {
  const { timestamp } = useContext(DateContext)
  const { secondsPassed, minutesPassed, hoursPassed, daysPassed, yearsPassed } =
    useCounter({ timestamp })
  return (
    <VStack mt={5}>
      <Heading>You have been here for:</Heading>
      <Section top={<Counter secondsPassed={secondsPassed} />}>
        <Card header="Minutes" amount={minutesPassed} />
        <Card header="Hours" amount={hoursPassed} />
        <Card header="Days" amount={daysPassed} />
        <Card header="Years" amount={yearsPassed} />
      </Section>
    </VStack>
  )
}

export default UserSection
