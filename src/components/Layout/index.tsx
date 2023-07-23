import { Flex, Grid, GridItem } from '@chakra-ui/react'
import Footer from '../Footer'
import Header from '../Header'

type Props = {
  children: React.JSX.Element | React.JSX.Element[]
}
const Layout = ({ children }: Props) => {
  return (
    <Flex w="100vw" h="100vh" bg="orange.200">
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'80px 1fr 50px'}
        gridTemplateColumns={'0px 1fr'}
        w="100%"
        h="100%"
      >
        <GridItem area={'header'} bg="ivory" borderBottom="1px solid black">
          <Header />
        </GridItem>
        <GridItem area={'nav'}>{/* ?? */}</GridItem>
        <GridItem area={'main'}>{children}</GridItem>
        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Layout
