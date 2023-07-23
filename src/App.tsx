import { Divider, Flex } from '@chakra-ui/react'
import Layout from './components/Layout'
import SiteSection from './components/SiteSection'
import UserSection from './components/UserSection'

function App() {
  return (
    <Layout>
      <Flex h="100%" justifyContent="space-between" flexDir="column">
        <UserSection />
        <Divider borderColor="black" />
        <SiteSection />
      </Flex>
    </Layout>
  )
}

export default App
