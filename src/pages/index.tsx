import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import {CheckCircleIcon, LinkIcon} from '@chakra-ui/icons'

import Hero from 'components/Hero'
import Container from 'components/Container'
import Main from 'components/Main'
import CTA from 'components/CTA'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const Index = () => (
  <Container height="100vh">
    <Navbar />
    <Main>hello</Main>
  </Container>
)

export default Index
