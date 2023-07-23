import { Heading, VStack } from '@chakra-ui/react'
import useCounter from '../../hooks/useCounter'
import Card from '../Card'
import Section from '../Section'

const SiteSection = () => {
  const { secondsPassed, minutesPassed, hoursPassed, daysPassed, yearsPassed } =
    useCounter({ timestamp: 1690128738780 })
  return (
    <VStack>
      <Heading>This website has been here for:</Heading>
      <Section>
        <Card header="Seconds" amount={secondsPassed.toString()} />
        <Card header="Minutes" amount={minutesPassed} />
        <Card header="Hours" amount={hoursPassed} />
        <Card header="Days" amount={daysPassed} />
        <Card header="Years" amount={yearsPassed} />
      </Section>
    </VStack>
  )
}

export default SiteSection
