import { Center, Heading } from '@chakra-ui/react'

type Props = {
  secondsPassed: number
}
const Counter = ({ secondsPassed }: Props) => {
  //   const { timestamp } = useContext(DateContext)

  //   const { date, time } = formatDateToDDMMYYYY(timestamp)
  //   <Text> {`You arrived here on ${date} at ${time}`}</Text>
  return (
    <Center flexDir="column" h="100%" w="100%" mb={10}>
      <Heading as="h1" fontSize={120}>{`${secondsPassed}`}</Heading>
      <Heading fontSize={20}>Seconds</Heading>
    </Center>
  )
}

export default Counter
