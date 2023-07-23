import { Flex, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { DateContext } from '../context'

function Footer() {
  const { year } = useContext(DateContext)
  return (
    <Flex pr={20} justifyContent="flex-end">
      <Text> {`© ${year} to ∞`}</Text>
    </Flex>
  )
}

export default Footer
