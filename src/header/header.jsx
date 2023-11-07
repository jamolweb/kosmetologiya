import { Box } from "@chakra-ui/react"
import Navbar from "./navbar/navbar"
import Carousel from './header-carousel/header-carousel.jsx'
import HeaderBottom from './header-bottom/header-b.jsx'


export default () => {
    return (
        <Box>
            <Navbar />
            <Carousel />
            <HeaderBottom />
        </Box>
    )
}