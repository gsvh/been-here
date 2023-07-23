import { Flex, HStack } from '@chakra-ui/react'

type Props = {
  top?: React.JSX.Element
  children?: React.JSX.Element[] | React.JSX.Element
}
const Section = ({ top, children }: Props) => {
  return (
    <Flex w="100%" flexDir="column">
      {top ? top : null}
      <HStack w="100%" h="100%" flexDir="row" justifyContent="center">
        {children}
      </HStack>
    </Flex>
  )
}

export default Section
