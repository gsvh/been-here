import { Flex, Heading } from '@chakra-ui/react'

type Props = {
  header: string
  amount: string
}
const Card = ({ header, amount }: Props) => {
  return (
    <Flex
      boxShadow="lg"
      p={10}
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      bg="ivory"
    >
      <Heading size="2xl">{amount}</Heading>
      <Heading size="md"> {header}</Heading>
    </Flex>
  )
}

export default Card
